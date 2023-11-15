const db = require('./db/connection');

function viewAllEmployees(callback) {
    // Implement logic for viewing all employees
    // look at 12-SQL/01-activities/12
    return db.query('SELECT * FROM employee', function(err, results){
        console.table(results);
        callback()
    });
}

function addEmployee(callback) {
    // Implement logic for adding an employee
}

function updateEmployeeRole(callback) {
    // Implement logic for updating an employee's role
}

function viewAllRoles(callback) {
    // Implement logic for viewing all roles
    return db.query('SELECT * FROM role', function(err, results){
        console.table(results);
        callback()
    });
}

function addRole(callback) {
    // Implement logic for adding a role
}

function viewAllDepartments(callback) {
    return db.query('SELECT * FROM departments', function(err, results){
        console.table(results);
        callback()
    });
}

function addDepartment(callback) {
    // Implement logic for adding a department
}

module.exports = {viewAllEmployees, addEmployee, updateEmployeeRole, viewAllRoles, addRole, viewAllDepartments, addDepartment};