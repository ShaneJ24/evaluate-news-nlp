const dotenv = require('dotenv');
dotenv.config();

//MeaningCloud APIkey and URL
const apiUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

var path = require('path');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require("node-fetch");

//express 
const express = require("express");
const app = express();

//middleware
const bodyParser = require("body-parser");
app.use(bodyParser.text());

//cors
const cors = require("cors");
app.use(cors());

//The get request
app.get("/", (req, res) => {
    res.sendFile("dist/index.html");
  });

app.get('/newsarticle', function (req, res) {
    res.send(mockAPIResponse)
});  

//The post request
app.post("/newsarticle", async (req, res) => {
  const requrl = `${apiUrl}${API_KEY}&lang=auto&url=${req.body}`;
  console.log('calling api:', requrl);
    const resp = await fetch(requrl);
  
    try {
      const data = await resp.json();
      res.send(data);
    } catch (err) {
      console.log("error", err);
    }
});
  
// Port
app.listen(8081, function () {
    console.log('app listening on port 8081!')
});
