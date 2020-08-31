// importing the express 
const express = require("express");
const bodyParser = require("body-parser");

// intialize express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// creating routes for the calc app
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  let result = num1 + num2;
  res.send(`The result is: ${result}`);
});

// creating route for the bmi calc
app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / (height * height);
  res.send(`Your bmi is: ${bmi}`);
});

// the port number
const port = 3000;

app.listen(port, () => {
  console.log(`the server is running on port ${port}...`);
});


