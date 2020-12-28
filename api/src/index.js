require("dotenv").config(); // To use the values of the .env file

import path from "path";
import http from "http";
import express from "express";
import bodyParser from "body-parser";
import  multer from "multer";

const app = express();
// const upload = multer();

const server  = http.createServer(app);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("OK");
});


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static(path.join(__dirname, "public")));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("recieved your request!");
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`, process.env.NODE_ENV);
});
