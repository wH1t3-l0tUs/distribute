
const boxPrices =  require('./src/Object/boxitems')
const weeklyData =  require('./src/Object/weeklyrevenue')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;


mongoose.connect('mongodb+srv://tuchikien1234:F1rst_clust3r@healsouldb.86hstae.mongodb.net/',{
  dbName:'React-app',
  useNewUrlParser: true,
  useUnifieldTopology: true
  }, err=>err? console.log(err):
  console.log('Connected to yourDB-name database'));

const UserSchema= new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }

});
const User = mongoose.model('user',UserSchema);
User.createIndexes();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



app.get('/',(req,res)=>{
  res.send('Hello from backend');
})




app.get('/api/value', (req,res)=>{
  res.json({boxPrices,weeklyData});
})



app.post('/Login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Login failed' });
  }
});


app.post('/api/register',async (req,res)=>{
  try{
    const user = new User(req.body);
    let result = await user.save();
    result=result.toObject();
    if(result){
      delete result.password;
      res.send(req.body);
      console.log(result);
    }
    else{
      console.log("User already register");
    }
  }
  catch(e){
    res.send("Something Went Wrong")
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
