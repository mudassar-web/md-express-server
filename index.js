// Add Express
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
const usersModel = require('./models/users')
const PORT = process.env.PORT || 4000

// Initialize Express
const app = express();

//configure app
app.use(cors())
app.use(express.json()) // for parsing application/json

//connecting to mongodb
mongoose.connect('mongodb://bitmongo:27017/mdnotes', { useNewUrlParser: true, useUnifiedTopology: true });

// Create GET request
app.get("/", (req, res) => {
  res.send("MD-Express-Server Running");
});

// health checkup call
app.get('/health', (_req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  }
  res.status(200).send(data)
})

//create user in mongodb
app.post('/create', async (req, res) => {
  try {
      let user = await usersModel.findOne({ 'uname': req.body.uname }, 'uname')
      if (user) {
          res.status(401).send('User already exists.');
      }
      else {
          const u1 = new usersModel({ uname: req.body.uname, pwd: req.body.pwd });
          let result = await u1.save()
          res.send(result)
      }
  }
  catch (error) {
      res.status(401).send('User Creation Failed!!!!' + error)
  }
})

//read user in mongodb
app.post('/retrieve', async (req, res) => {
  try {
      let user = await usersModel.findOne({ 'uname': req.body.uname, 'pwd': req.body.pwd })
      if (user) {
          res.status(200).send(user)
      }
      else {
          res.status(401).send('Invalid Creds.')
      }
  }
  catch (error) {
      res.status(401).send('User Retrieval Failed!!!!' + error)
  }
})

// Initialize server
app.listen(PORT, () => {
  console.log(`Sever Running on port ${PORT}.\nhttp://localhost:${PORT}`);
});

module.exports = app
