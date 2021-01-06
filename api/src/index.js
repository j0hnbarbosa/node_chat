require("dotenv").config(); // To use the values of the .env file
require("./database");

import routes from "./routes";
import http from "http";
import express from "express";
import bodyParser from "body-parser";

const app = express();
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(routes);

const server  = http.createServer(app);
const port = process.env.PORT || 3000;


server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`, process.env.NODE_ENV);
});
