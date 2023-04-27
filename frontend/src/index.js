require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const conn = require("express-myconnection");
const route = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 5001;
const dbConfig = {
  /*host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "punto-motero",*/
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "punto-motero",
};

app.use(conn(mysql, dbConfig, "single"));
app.use(express.json());
app.use("/", route);

app.listen(PORT,() =>{
  console.log(`server running on port ${PORT}`);
});