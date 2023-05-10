CREATE DATABASE IF NOT EXISTS punto-motero;

USE punto-motero;

CREATE TABLE productos(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) ,
  categoria VARCHAR(50) ,
  imagen VARCHAR(250),
  descripcion VARCHAR(500),
  precio BIGINT
);