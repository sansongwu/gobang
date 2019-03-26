
import chessColorStatusMap from '../map/chess_color_status.json'
import config from '../config'

const CheckResult = class {
    constructor (currentContext) {
        this.context = currentContext
        // this.colArr = [];
        this.squareWidth = config.lineNum;
        this.sourceMap = null;
        this.sourceMap2 = null;
        this._init();
    }
    _init () {
        this.sourceMap = this.context.arr;
        this.sourceMap2 = this.context.arr2;
        // this.createColArr()
    }
    /* 获取 把矩阵斜过来后 的行数 */
    getTiltLine
    /* 返回true 代表当前色胜利 false 代表无胜利方 游戏继续 */
    getResult () {
        const calculateTargetStatus = chessColorStatusMap[this.context.current].status; // 获取当前颜色的状态 只判断当前颜色是否胜利 运算数量减半
        if (this.checkRow(calculateTargetStatus)) {
            return true
        }
        return false;
    }

    /* 判断横竖行  是否满足胜利条件 */
    checkRow (targetStatus) {
        /* 单行总数是否大于等于5 */
        /* 判断连续性 */
        /* 算法: 逐一遍历当前棋子 如果一致 num++  否则清零   num==5 代表胜利结果 */
        // let continuousNumber = 0;
        // for (let i = 0; i < arr.length; i++) {
        //     const element = arr[i];
        //     continuousNumber = element == targetStatus ? continuousNumber + 1 : 0;
        //     if (continuousNumber == 5) {
        //         return true
        //     }
        // }
        // return false;

        /* 判断横行 竖行 是否出结果 一起判断是因为这样遍历的次数少 */
        const sourceMap = this.context.arr;
        const sourceMap2 = this.context.arr2
        const length = sourceMap.length;
        for (let i = 0; i < length; i ++ ) {
            /* 判断连续性 */
            /* 算法: 逐一遍历当前棋子 如果一致 num++  否则清零   num==5 代表胜利结果 */
            let continuousNumber = 0;
            let continuousNumber2 = 0;
            for (let j = 0; j < sourceMap.length; j++) {
                const element = sourceMap[i][j];
                const element2 = sourceMap2[i][j];
                continuousNumber = element == targetStatus ? continuousNumber + 1 : 0;
                continuousNumber2 = element2 == targetStatus ? continuousNumber2 + 1 : 0;
                if (continuousNumber == 5 || continuousNumber == 5) {
                    return true
                }
            }
        }
        /* 判断斜行 左上到右下 */

        /* 都不符合要求 */
        return false
    }
    /* 判断斜行 */
    checkSlope () {
        const sourceMap = this.context.arr;
        const sourceMap2 = this.context.arr2

        /* 获取遍历次数 */
        const times = 2 * this.squareWidth - 1;
        /* 获取中间的数值 用来计算循环内部的循环次数 */
        const midTimes = (times + 1) / 2
        for (let i = 0; i < times; i++) {
            /* 每行遍历的次数  即斜行每行的长度 */
            const rowTimes = i <= midTimes ? i : (times - i + 1);
            if (rowTimes < 5) {
                continue; // 长度都不到5 没check的必要了
            }
            for (let j = 0; j < rowTimes; j++) {
                let rowNum
            }
        }
    }
}

export default CheckResult;
