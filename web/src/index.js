require("dotenv").config(); // To use the values of the .env file

import path from "path";
import http from "http";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const server  = http.createServer(app);
const port = process.env.PORT_WEB || 3002;

app.use(express.static(path.join(__dirname, "public")));

server.listen(port, () => {
  console.log(`Server WEB is running at http://localhost:${port}`, process.env.NODE_ENV);
});
