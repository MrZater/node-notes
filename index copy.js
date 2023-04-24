// 细胞分裂 有一个细胞 每一个小时分裂一次，一次分裂一个子细胞，第三个小时后会死亡。那么n个小时候有多少细胞？
// a细胞 出生1小时
// b细胞 出生2小时
// c细胞 出生3小时

function getCellNum(n) {
    // a细胞 出生1小时
    let acell = function (n) {
        if (n === 1) {
            // 第一个小时，只有本体细胞
            return 1
        } else {
            // 其他时间，上一小时的三类细胞数总和
            return acell(n - 1) + bcell(n - 1) + ccell(n - 1)
        }
    }

    // b细胞 出生2小时
    let bcell = function (n) {
        if (n === 1) {
            // 第一个小时，没有b细胞
            return 0
        } else {
            // 其他时间，上一小时的a细胞数
            return acell(n - 1)
        }
    }

    // c细胞 出生3小时
    let ccell = function (n) {
        if (n <= 2) {
            // 前两个小时，没有c细胞
            return 0
        } else {
            // 其他时间，上一小时的b细胞数
            return bcell(n - 1)
        }
    }

    // a，b，c三种细胞的总和
    return acell(n) + bcell(n) + ccell(n)
}

console.log(getCellNum(6))




//   时间  a   b   c   数量
//    1   1   0   0    1
//    2   1   1   0    2
//    3   2   1   1    4
//    4   4   2   1    7
//    5   7   4   2    13
//    6   13  7   4    24
//  ......




    // /**
    //  * 获取斐波拉契数列的第n项的值
    //  * @param {*} n 
    //  */
    // function getFibonacciItem(n) {
    //     if (n === 1 || n === 2) {
    //         return 1
    //     } else {
    //         return getFibonacciItem(n - 1) + getFibonacciItem(n - 2)
    //     }
    // }

    // console.log(getFibonacciItem(50))