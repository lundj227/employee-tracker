const inquirer = require('inquirer');
const {viewAllEmployees, addEmployee, updateEmployeeRole, viewAllRoles, addRole, viewAllDepartments, addDepartment} = require('./functions.js');

function questions(){
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View all Departments',
                'Add Department',
                'Quit'
            ],
            name: 'optionsToDo'
        }
    ]).then(
        (data) => {
            switch (data.optionsToDo) {
                case 'View all employees':
                    viewAllEmployees(questions);
                    break;
                case 'Add Employee':
                    addEmployee(questions);
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole(questions);
                    break;
                case 'View All Roles':
                    viewAllRoles(questions);
                    break;
                case 'Add Role':
                    addRole(questions);
                    break;
                case 'View all Departments':
                    viewAllDepartments(questions);
                    break;
                case 'Add Department':
                    addDepartment(questions);
                    break;
                case 'Quit':
                    console.log('Goodbye!');
                    process.exit();
                default:
                    console.log('Invalid option');
            }
        }
    ).catch((err) => console.log(err));
};
questions();