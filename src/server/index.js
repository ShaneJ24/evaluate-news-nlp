var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch");

const dotenv = require('dotenv');
const aylien = require('meaningCloud_textapi');
dotenv.config();



var meaningCloudApi = new meaningCloud({
  
    application_key: process.env.API_KEY
  });

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.text());

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile("dist/index.html");
  });

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})  
 
app.post("/article", async (req, res) => {
    const resp = await fetch(`${application_id}${API_KEY}&lang=auto&url=${req.body}`);
  
    try {
      const data = await resp.json();
      res.send(data);
    } catch (err) {
      console.log("error", err);
    }
});
  
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})