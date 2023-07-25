const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Routes')
const {connectToDatabase}  = require('./database');
const cookieparser = require('cookie-parser');
const path = require('path');


const app = express();

app.use(cors({
    credentials:true
  }))

app.use(cookieparser());
app.use(express.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use('/',routes);


// static 
app.use(express.static(path.join(__dirname,'./client/dist')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"./client/dist/index.html"))
})

connectToDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started at port 5000'));
