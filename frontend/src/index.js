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
  database: "railway",
  port: "6262",
  user: "root",
  host: "containers-us-west-176.railway.app",
  password: "O1L85rtc1VZKxsLjPZCq",
  ssl: {
    rejectUnauthorized: false
  }
};

app.use(conn(mysql, dbConfig, "single"));
app.use(express.json());
app.use("/", route);

app.listen(PORT,() =>{
  console.log(`server running on port ${PORT}`);
});


/*CREATE TABLE productos(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) ,
  categoria VARCHAR(50) ,
  imagen VARCHAR(250),
  descripcion VARCHAR(500),
  precio BIGINT
);*/