const express = require('express');
const router = express.Router();
const { fetchData } = require('./api');
const {User}  = require('./database');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();



// middleware
router.use(cors({
  credentials:true
}))





router.get('/home', (req, res) => {
    const slicedQuestionContent = questioncontent.slice(0, 60);
    res.send(slicedQuestionContent[0].Title);
  });



// Function to hash the password using bcrypt
const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error while hashing the password:', error);
  }
};

const authenticate = async (uname, pass) => {
  const user = await User.findOne({ username: uname });
  if (!user) {
    return null;
  }

  const isPasswordMatch = await bcrypt.compare(pass, user.password);
  if (!isPasswordMatch) {
    return null;
  }

  return user;
};

router.post('/login', async (req, res) => {
  const uname = req.body.username;
  const pass = req.body.password;
  console.log(uname, pass);

  try {
    const user = await authenticate(uname, pass);
    if (user) {

      jwt.sign({id:user._id ,username:user.username},process.env.JWT_SECRET,{},(err,token)=>{
        if(err) throw err;
        res.cookie('token',token).json({ success: true, message: "Login successful", user,token:token });
      });

    } else {
      return res.json({ success: false, message: "Wrong credentials" });
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error(error);
    return res.json({ success: false, message: "An error occurred" });
  }
});
  
  
  

router.post('/register', async (req, res) => {
  const uname = req.body.username;
  const pass = req.body.password;
  console.log(uname, pass);

  try {

    const existingUser = await User.findOne({ username: uname });
    if (existingUser) {
      return res.json({ success: false, message: "Username already exists. Please choose a different username.",userexists:1 });
    }
    // Hash the password before saving it to the database
    const hashedPassword = await hashPassword(pass);

    const data = {
      username: uname,
      password: hashedPassword, // Save the hashed password
    };

    const newitem = new User(data);
    await newitem.save();
    console.log('data saved successfully');
    return res.json({ success: true ,userexists:0});
  } catch (error) {
    // Handle any unexpected errors
    console.error(error);
    return res.json({ success: false, message: "An error occurred",userexists:0 });
  }
});



router.post('/', async (req, res) => {
const topicData = req.body.svalue;

try {
    console.log(topicData);
    let questioncontent = await fetchData(topicData);
    console.log('Data fetched successfully');
    res.send(questioncontent);
} catch (error) {
    console.error(error);
    res.status(500).send('Error occurred during data fetching');
}
});


// protected pages

// problems

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send('Unauthorized: No token passed');
    }

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    const rootUser = await User.findOne({ _id: verifiedToken.id });

    if (!rootUser) {
      throw new Error('User not found');
    }

    req.token = verifiedToken;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send('Unauthorized: Invalid token');
    console.error(error);
  }
};


router.get('/problems',auth,(req,res)=>{
  res.send(req.rootUser);
})
router.get('/solve',auth,(req,res)=>{
  res.send(req.rootUser);
})
router.get('/submissions',auth,(req,res)=>{
  res.send(req.rootUser);
})
router.get('/logout',auth,(req,res)=>{

  res.clearCookie('token',{path:'/'})
  res.status(200).send('user logged out ');
})



// solve handling


router.post('/ide', async (req, res) => {
  try {
    const userdata = req.body.userdata;
    const questiondata = req.body.questiondata;
    const code = req.body.code;

    console.log('This is the data received from the /ide route:');
    console.log(userdata, questiondata, code);

    // Find the user by userdata._id
    const userId = userdata._id;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    console.log('User before update:', user);

    // Convert QuestionID to a string for comparison
    const questionIDString = questiondata.QuestionID.toString();

    // Check if the QuestionID already exists in the user's submissions
    const existingSubmissionIndex = user.submissions.findIndex(submission => submission.questiondata.QuestionID === questionIDString);

    if (existingSubmissionIndex !== -1) {
      // If the QuestionID already exists, remove the existing submission
      user.submissions.splice(existingSubmissionIndex, 1);
    }

    // Add the new submission with the updated code
    user.submissions.push({ questiondata: questiondata, code: code });

    // Save the updated user data with the new submission
    const updatedUser = await user.save();

    console.log('User data after adding/updating submission:', updatedUser);
    res.send('Submission added/updated for the user.');
  } catch (error) {
    console.error('Error adding/updating submission to user:', error.message);
    res.status(500).send('Error adding/updating submission to user');
  }
});






router.post('/getcode', async (req, res) => {
  try {
    const userId = req.body.userId;
    const qid = req.body.qid;

    console.log('this is the uid and qid for the code', userId, qid);

    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Search for the submission with the given qid in the user's submissions array
    const submission = user.submissions.find(submission => submission.questiondata.QuestionID === qid); // Note the change here to use "QuestionID"

    if (submission) {
      // If submission with qid is found, return its code
      console.log('Found code:', submission.code);
      return res.send(submission.code);
    } else {
      // If submission with qid is not found, return the default code string
      return res.send('// write your code here');
    }
  } catch (error) {
    console.error('Error fetching code:', error.message);
    res.status(500).send('Error fetching code');
  }
});


module.exports = router;