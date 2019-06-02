CREATE DATABASE clinica;

USE clinica;

CREATE TABLE pacientes (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(180),
    ApellidoPaterno VARCHAR(180),
    ApellidoMaterno VARCHAR(180),
    Correo VARCHAR(255),
    Password VARCHAR(255),
    Imagen VARCHAR(200),
    Access VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);