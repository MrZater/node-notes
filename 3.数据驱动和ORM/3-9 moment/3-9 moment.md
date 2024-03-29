## moment

### 官网 
``https://momentjs.com/``

### 民间中文网
``http://momentjs.cn/``

### 概念

- utc和北京时间
  - utc：世界协调时
  - 以英国格林威治时间为标准
  - utc时间和北京时间相差8小时
  - utc的凌晨相当于北京时间的上午8点

- 时间戳 timestamp
  - 某个utc时间到utc1970-1-1凌晨经过的毫秒数    
    - 也可以是秒数，用小数部分记录毫秒
  - 注意点：时间戳表示的是utc时间的差异
  
- 对于服务器的影响
  - 服务器可能会部署到世界的任何位置
  - 服务器内部应该统一使用utc时间或时间戳，包括数据库

- 对于客户端的影响
  - 客户端要给不同地区的客户友好的显示时间
  - 客户端应该把时间戳或utc时间转换为本地时间显示


```js
const moment = require("moment");
moment.locale("zh-cn");
//得到当前时间，moment对象
console.log(moment().toString());
console.log(moment.utc().toString());

//得到当前时间戳
console.log(moment().valueOf(), +moment());
console.log(moment.utc().valueOf(), +moment.utc());

//根据指定的时间格式得到时间，时间格式：xxxx-xx-xx xxxx/xx/xx  时间戳
console.log(moment(0).toString(), +moment(0));
console.log(moment.utc(0).toString(), +moment.utc(0));
const value = "1970-01-01 00:00:00";
console.log(moment(value).toString(), +moment(value));
console.log(moment.utc(value).toString(), +moment.utc(value));

//使用日期令牌转换
//令牌是一个格式化的字符串，例如： "YYYY-MM-DD HH:mm:ss"
const formats = ["YYYY-MM-DD HH:mm:ss", "YYYY-M-D H:m:s", "x"];
console.log(moment.utc("1970-01-01 00:00:00", formats, true).toString());
console.log(moment.utc("1970-1-1 0:0:0", formats, true).toString());
console.log(moment.utc(0, formats, true).toString());
const invalidMoment = moment.utc(
    "Thu Jan 01 1970 00:00:00 GMT+0000",
    formats,
    true
);
console.log(invalidMoment.isValid()); // false
console.log(invalidMoment.toString());
console.log(+invalidMoment);

// 显示（发生在客户端）
const m1 = moment.utc("2015-1-5 23:00:01", formats, true);
console.log(m1.local().format("YYYY年MM月DD日 HH点mm分ss秒"));

const m2 = moment("2015-1-5 23:00:01", formats, true);
const toServer = m2.utc().format("YYYY-MM-DD HH:mm:ss");
console.log(toServer);

const m3 = moment.utc("2020-4-14 9:00:01", formats, true);
console.log(m3.local().fromNow());
```