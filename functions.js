const db = require('./db/connection');

function viewAllEmployees(callback) {
    // Implement logic for viewing all employees
    // look at 12-SQL/01-activities/12
    return db.query('SELECT * FROM employee', function(err, results){
        console.table(results);
        callback()
    });
}

function addEmployee() {
    // Implement logic for adding an employee
}

function updateEmployeeRole() {
    // Implement logic for updating an employee's role
}

function viewAllRoles() {
    // Implement logic for viewing all roles
}

function addRole() {
    // Implement logic for adding a role
}

function viewAllDepartments() {
    // Implement logic for viewing all departments
}

function addDepartment() {
    // Implement logic for adding a department
}
module.exports = {viewAllEmployees};