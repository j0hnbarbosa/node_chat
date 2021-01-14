require("dotenv").config(); // To use the values of the .env file
require("./database");

import routes from "./routes";
import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = process.env.PORT || 3000;
const portWeb = process.env.PORT_WEB || 3002;

const app = express();
app.use(cors());

// Used to restric the source origin of the requests.
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   const allowedOrigins = [`http://localhost:${portWeb}`, `http://192.168.15.19:${portWeb}`];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.header("Access-Control-Allow-Origin", origin);
//   }
//   res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(routes);

const server  = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`, process.env.NODE_ENV);
});
