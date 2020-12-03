const dotenv = require('dotenv');
dotenv.config();

//meaningCloud api and URL
const API_KEY = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

const path = require("path");
const mockAPIResponse = require("./mockAPI");
const fetch = require("node-fetch");

//express server
const express = require("express");
const app = express();

//middle-ware 
const bodyParser = require("body-parser");
app.use(bodyParser.text());

//cors for cross orgin allowance
const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

//Get request 
app.get("/", (req, res) => {
    res.sendFile("dist/index.html");
});

app.get("/test", (req, res) => {
    res.send(mockAPIResponse);
});

//post
app.post("/article", async (req, res) => {
    const response = await fetch(`${baseUrl}${API_KEY}&lang=auto&url=${req.body}`);

  try {
    const data = await resp.json();
    res.send(data);
  } catch (err) {
    console.log("error", err);
  }
});
//port
app.listen(8080, () => {
    console.log(`app running at http://localhost:8080`);
  });