## Sequelize简介
### ORM
- Object Relational Mapping 对象关系映射
- 通过ORM框架，可以自动的把程序中的对象和数据库关联
- ORM框架会隐藏具体的数据库底层细节，让开发者使用同样的数据操作接口，完成对不同数据库的操作
  - ![](../images/ORM%E5%8E%9F%E7%90%86%E5%9B%BE.jpg)
- ORM的优势
  - 开发者不用关心数据库，仅需关心对象
  - 可轻易的完成数据库的移植
  - 无须拼接复杂的sql语句即可完成精确查询
- Node中的ORM
  - Sequelize：支持JS、TS，成熟
  - TypeORM：只支持TS，不成熟