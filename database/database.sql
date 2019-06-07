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
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    EnfermedadesCronicas VARCHAR(200),
    ResumenClinico VARCHAR(900)
);

CREATE TABLE citas (
    idCitas INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(180),
    ApellidoPaterno VARCHAR(180),
    ApellidoMaterno VARCHAR(180),
    Correo VARCHAR(255),
    Celular VARCHAR(255),
    Doctor VARCHAR(255),
    Hora VARCHAR(255)

);


CREATE TABLE personal (
    idPersonal INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(180),
    ApellidoPaterno VARCHAR(180),
    ApellidoMaterno VARCHAR(180),
    Edad VARCHAR(255),
    Sexo VARCHAR(255),
    Correo VARCHAR(255),
    Celular VARCHAR(255),
    Domicilio VARCHAR(255),
    LugarNacimiento VARCHAR(255),
    Imagen VARCHAR(200),
    TipoPersonal VARCHAR(200)
   
   
);

// aqui se muestra la relacion con la tabla personal con idpersonal
CREATE TABLE Horarios (
    idHorarios INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Consultorio VARCHAR(255),
    FechaHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    IdPersonal INT

    
);


CREATE TABLE admins (
    idAdmins INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(180),
    ApellidoPaterno VARCHAR(180),
    ApellidoMaterno VARCHAR(180),
    Correo VARCHAR(255),
    Password VARCHAR(255),
    Imagen VARCHAR(200),
    Access VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



