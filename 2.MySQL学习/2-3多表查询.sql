-- 笛卡尔积
SELECT t1.name 主场, t2.name 客场 
FROM team as t1, team as t2 
WHERE t1.id != t2.id;

-- 左连接
SELECT * FROM department as d LEFT JOIN employee as e
ON d.id = e.deptId;

-- 右连接
SELECT * FROM employee as e RIGHT JOIN department as d
ON d.id = e.deptId;

-- 内连接
SELECT * FROM employee as e 
INNER JOIN department as d ON d.id = e.deptId 
INNER JOIN company as c ON d.companyId = c.id;

-- 2. 显示出所有员工的姓名、性别（使用男或女显示）、入职时间、薪水、所属部门（显示部门名称）、所属公司（显示公司名称）
SELECT
e.`name` 员工姓名,
CASE e.ismale WHEN 1 THEN '男' ELSE '女' END,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 所属部门,
c.`name` 所属公司
FROM employee as e
INNER JOIN department as d on e.deptId=d.id
INNER JOIN company as c on d.companyId=c.id;

-- 3. 查询腾讯和蚂蚁金服的所有员工姓名、性别、入职时间、部门名、公司名

SELECT e.`name` 员工姓名, 
case ismale when 1 then '男' else '女' end 性别,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
FROM employee e 
inner join department d on e.deptId = d.id
inner join company c on d.companyId = c.id
WHERE c.`name` in ('腾讯科技', '蚂蚁金服')

-- 4. 查询渡一教学部的所有员工姓名、性别、入职时间、部门名、公司名

SELECT e.`name` 员工姓名, 
case ismale when 1 then '男' else '女' end 性别,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
FROM employee e 
inner join department d on e.deptId = d.id
inner join company c on d.companyId = c.id
WHERE c.`name` like '%渡一%' AND d.`name` = '教学部';

-- 5. 列出所有公司员工居住的地址（要去掉重复）

select DISTINCT location from employee;