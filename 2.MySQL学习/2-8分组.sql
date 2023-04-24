SELECT location, COUNT(id) FROM employee
GROUP BY location;

SELECT location, ismale, COUNT(id) FROM employee
GROUP BY location, ismale;

SELECT location, COUNT(id) as empnumber
FROM employee
GROUP BY location
HAVING empnumber>=40;



SELECT department.`name`,COUNT(employee.id)
FROM employee 
INNER JOIN department ON employee.deptId=department.id
INNER JOIN company ON company.id=department.companyId
WHERE company.id=2
GROUP BY department.id;

SELECT company.`name`,COUNT(employee.id)
FROM employee 
INNER JOIN department ON employee.deptId=department.id
INNER JOIN company ON company.id=department.companyId
GROUP BY company.id;


SELECT *
FROM  company
INNER JOIN department ON company.id=department.companyId
INNER JOIN employee ON employee.deptId=department.id
WHERE TIMESTAMPDIFF(YEAR,employee.joinDate,CURDATE())<=5 
AND employee.location LIKE '%万家湾%'
GROUP BY company.id;



