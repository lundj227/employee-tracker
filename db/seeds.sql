USE employee_db;

INSERT INTO departments(name)
VALUES  ('Sales'),
        ('Legal'),
        ('Engineering');

INSERT INTO role(title, salary, department_id)
VALUES  ('Associate', 120000.00, 001),
        ('Paralegal', 60000.00, 002),
        ('Project Manager', 150000, 003);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ('Jack', 'Lund', '001'), 
        ('Jenna', 'Mable', '002'), 
        ('Katy', 'Hemsworth', '003');

