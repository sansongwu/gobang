
import chessColorStatusMap from '../map/chess_color_status.json'
import config from '../config'

const CheckResult = class {
    constructor (currentContext) {
        this.context = currentContext
        this.colArr = [];
        this._init();
    }
    _init () {
        this.createColArr()
    }
    /* 返回true 代表当前色胜利 false 代表无胜利方 游戏继续 */
    getResult () {
        const calculateTargetStatus = chessColorStatusMap[this.context.current].status; // 获取当前颜色的状态 只判断当前颜色是否胜利 运算数量减半
        /* 判断横行是否出结果 */
        const sourceMap = this.context.arr;
        const length = sourceMap.length;
        for (let i = 0; i < length; i ++ ) {
            if (this.checkRow(sourceMap[i], calculateTargetStatus)) return true;
        }
        /* 判断竖列是否出结果 */
        const colArr = this.getCol(sourceMap);
        for (let i = 0; i < length; i ++ ) {
            if (this.checkRow(colArr[i], calculateTargetStatus)) return true;
        }
        /* 判断斜行 左上到右下 */

        /* 都不符合要求 */
        return false
    }
    /* 判断一行  是否满足胜利条件 */
    checkRow (arr, targetStatus) {
        /* 单行总数是否大于等于5 */
        // const total = 0;
        // arr.forEach(element => {
        //     element == targetStatus && total++
        // });
        // if (total < 5) {
        //     return false
        // }
        /* 判断连续性 */
        /* 算法: 逐一遍历当前棋子 如果一致 num++  否则清零   num==5 代表胜利结果 */
        let continuousNumber = 0;
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            continuousNumber = element == targetStatus ? continuousNumber + 1 : 0;
            if (continuousNumber == 5) {
                return true
            }
        }
        return false;
    }
    /* 判断竖列 */
    checkCol () {

    }
    /* 生成列数组空壳 生成一次就可以了*/
    createColArr () {
        const length = config.lineNum;
        for (let i = 0; i < length; i++) {
            const arr = []
            for (let i = 0; i < length; i++) {
                arr.push(0)
            }
            this.colArr.push(arr)
        }
    }
    /* 生成列数组     左上到右下 轴对称翻转  */
    getCol (map) {
        const length = map.length;
        for (let i = 0; i < length; i ++) {
            for (let j = 0; j < length; j ++) {
                /* 给列数组赋值 */
                console.log(map[i][j])
                console.log(map[j][i])
                console.log(this.colArr)
                this.colArr[j][i] = map[i][j];
                this.colArr[i][j] = map[j][i];
            }
        }
        return this.colArr;
    }
    /* 生成斜数组 */
}

export default CheckResult;
