-- 平均值
SELECT AVG(salary) 平均薪资 FROM employee;

-- 数据数量
SELECT COUNT(id) 员工数量 FROM employee;

-- 最小数值
SELECT MIN(salary) 最低工资 FROM employee;

-- 最大数值
SELECT MAX(salary) 最高工资 FROM employee;

-- 数值求和
SELECT SUM(salary) 总工资 FROM employee;


SELECT 
COUNT(id) 员工数量, 
MIN(salary) 最低工资,
MAX(salary) 最高工资,
SUM(salary) 总工资
FROM employee;