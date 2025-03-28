const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const webRoutes = require('./Routes/webRoutes');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(express.json());

mongoose.connect('mongodb+srv://shivakumarbojanapu:B2nZkhpNdarN4mya@cluster0.uk37h5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then((result) => app.listen(4000,(req,res)=>{
    console.log('mongoDB connected Succesfully');
  }))
  .catch((err) => console.log(err));



app.use(webRoutes);