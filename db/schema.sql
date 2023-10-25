DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments(
    id INT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id: INT PRIMARY KEY,
    title: VARCHAR(30),
    salary: DECIMAL,
    department_id: INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
)

CREATE TABLE employee (
    id: INT,
    first_name: VARCHAR(30),
    last_name: VARCHAR(30),
    role_id: INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
)