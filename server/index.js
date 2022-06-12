const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection = require('./dbconnect');
const app = express();
const port = 8000;


app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());


app.post('/postdata', function (req, res) {
  const objectnew = {
    fullName: req.body.fullname,
    Username: req.body.username,
    emailId: req.body.email,
    Password: req.body.password,
    Confirmpassword: req.body.confirmPassword,
    type: 'userInfo'

  }
  console.log("data from angular", objectnew);


  dbconnection.testdb.insert(objectnew).then((data) => {
    console.log("data inserted succesfully", data);
    let data1;
    if (data['id']) {
      data1 = {
        message: "Registered Succesfully",

        status: "success",
        response: data
      }
    }
    res.send(data1);
  }).catch((error) => {
    res.status(400).send({
      message: 'Failed to Register',
      status: "error",
      error: error
    });
  })
});

app.post('/getdata', (req, res) => {
  console.log("emailId:", req.body.emailId);


  const object = {
    selector: {
      "emailId": req.body.emailId,
      type: 'userInfo'
    }
  }
  dbconnection.testdb.find(object).then((data) => {
    console.log("data fetch from db", data);
    res.send(data);
  }).catch((err) => {
    console.log("error", err);
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});

