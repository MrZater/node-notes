-- 拼接返回新列
SELECT CONCAT(`name`, location) FROM employee;

-- 通过某个字符拼接
SELECT CONCAT_WS('_', `name`, location) FROM employee;

-- 去除空格
SELECT TRIM(location) FROM employee;

-- 去除左空格
SELECT LTRIM(location) FROM employee;

-- 去除右空格
SELECT RTRIM(location) FROM employee;