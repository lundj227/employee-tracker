const inquirer = require('inquirer');
const fs = require('fs');
const {} = require('functions')
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
                    viewAllEmployees();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View all Departments':
                    viewAllDepartments();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Quit':
                    break;
                default:
                    console.log('Invalid option');
            }
        }
    ).catch((err) => console.log(err));