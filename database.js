const mongoose = require('mongoose');


//connection

async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb+srv://admin:'+process.env.DB_PASSWORD+'@cluster0.xgf8i8e.mongodb.net/BacktracKING');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }


// schema


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  submissions: []
});


// model
const User = mongoose.model('User', userSchema);



module.exports = {connectToDatabase,User};