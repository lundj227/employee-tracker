USE employee_db;

INSERT INTO departments(id, name)
VALUES  (001, 'Sales'),
        (002, 'Legal'),
        (003, 'Engineering');

INSERT INTO role(id, title, salary, department_id)
VALUES  (001, 'Associate', 120000.00, 001),
        (002, 'Paralegal', 60000.00, 002),
        (003, 'Project Manager', 150000, 003);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES  (001, 'Jack', 'Lund', '001'), 
        (002, 'Jenna', 'Mable', '002'), 
        (003, 'Katy', 'Hemsworth', '003');

