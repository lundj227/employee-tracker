const db = require('./db/connection');
const inquirer = require('inquirer');

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
    // An employee needs a first name and a last name and role id
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the first name of the emplyee you would like to add?',
                name: 'newEmployeeFirst'
            },
            {
                type: 'input',
                message: 'What is the last name of the employee you would like to add?',
                name: 'newEmployeeLast'
            },
            {
                type: 'input',
                message: 'Please pick the number (1-9) that coorisponds with your new employees role:',
                name: 'newEmployeeRole'
            }
        ]).then((data) => {
            const newFirst = data.newEmployeeFirst;
            const newLast = data.newEmployeeLast;
            const newRole = data.newEmployeeRole;
            db.query("INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)", [newFirst, newLast, newRole],
            function (){
                //console.log(results);
                console.log('New Employee Added');
                callback();
            });
        }).catch((err) => console.log(err));
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
    // role needs a title, salary, and department
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your new role?',
                name: 'newRoleTitle'
            },
            {
                type: 'input',
                message: 'What is the salary of this role',
                name: 'newRoleSalary'
            },
            {
                type: 'input',
                message: "Please pick the number (1-9) that coorisponds with your new role's department:",
                name: 'newRoleDepartment'
            }
        ]).then((data) => {
            const newTitle = data.newRoleTitle;
            const newSalary = data.newRoleSalary;
            const newRoleDepart = data.newRoleDepartment;
            db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [newTitle, newSalary, newRoleDepart],
            function (err, results){
                console.log('New Role Added');
                callback();
            });
        }).catch((err) => console.log(err));
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