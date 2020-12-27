require("dotenv").config(); // To use the values of the .env file

import path from "path";
import http from "http";
import express from "express";

const app = express();
const server  = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`, process.env.NODE_ENV);
});
