CREATE DATABASE IF NOT EXISTS mobiledb;

USE mobiledb;

CREATE TABLE tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES
('tarea 1', 'primer tarea de prueba'),
('tarea 2', 'la segunda');