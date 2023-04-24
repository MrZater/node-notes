-- 删除
DELETE FROM student
WHERE id=6;

-- 新增
INSERT into `student`(`name`, birthday,sex, stuno,classid)
VALUES('小黄','1999-01-04',TRUE,'126','1'),
('小张','1999-01-03',TRUE,'124','2'),
('小李','1999-01-02',FALSE,'125','1');

-- 修改
UPDATE student SET `name`='周'
WHERE id=6;