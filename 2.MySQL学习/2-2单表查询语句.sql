SELECT id,loginid,loginpwd FROM `user`;


SELECT ismale '性别' FROM `employee`;


SELECT *, 'abc' as 'extra' FROM `employee`;


SELECT id, `name`,
CASE ismale WHEN 1 THEN '男' ELSE '女' END sex,
CASE 
WHEN salary>=10000 THEN '高工资'
WHEN salary>=5000 THEN '中等工资'
ELSE '低工资'
END 'level',
salary as '工资'
FROM `employee`;

--固定数值查询
SELECT * FROM `employee` WHERE ismale=1;

-- 数值在该列值中得查询
SELECT * FROM `department` WHERE companyId in (1,2);

-- 为null查询
SELECT * FROM `employee` WHERE location IS NULL;

-- 不为null查询
SELECT * FROM `employee` WHERE location IS NOT NULL;

-- 数值大于小于等于查询
SELECT * FROM `employee` WHERE salary >10000;

-- 数值之间查询
SELECT * FROM `employee` WHERE salary BETWEEN 10000 AND 12000;

-- 匹配查询
SELECT * FROM `employee` WHERE `name` LIKE '%袁%';
SELECT * FROM `employee` WHERE `name` LIKE '袁_';
SELECT * FROM `employee` WHERE `name` LIKE '袁__';

-- and or 
SELECT * FROM `employee` WHERE `name` LIKE '张%' AND ismale=0 AND salary>12000 AND birthday>'1996-1-1';

-- 排序
SELECT * FROM `employee` WHERE salary >15000 ORDER BY salary ASC;

--同值排序中再排序
SELECT * FROM `employee` ORDER BY ismale ASC, salary DESC;

-- 翻页查询
SELECT * FROM `employee` LIMIT 2,3;

-- 登陆查询
SELECT * FROM `user` WHERE loginid='admin' AND loginpwd='123123';

-- 查询最高值列
SELECT * FROM `employee` WHERE ismale=0 ORDER BY salary DESC LIMIT 0,1;

-- 去重
SELECT DISTINCT location FROM `employee`; 