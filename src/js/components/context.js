
import config from '../config'
import ChessBoard from './chessboard';
import Chess from './chessPieces'

const Context = class {
    constructor () {
        this.currentColor = 'chessBlack';
        this.currentStatus = 1 // 当前颜色的状态
        this.history = []; // 历史步骤
        this.arr = []; // 棋盘的数据映射
        this.chessWH = config.blockWH; // 棋子的宽高
        this._init();
    }
    _init () {
        /* 创建数据表格 */
/*         this.arr     arr 0 0 0 0 ... 0
                        arr 0 0 0 0 ... 0
                        arr 0 0 0 0 ... 0
                        .................
                        arr 0 0 0 0 ... 0 */
        const length = config.lineNum;
        for (let i = 0; i < length; i++) {
            const arr = []
            for (let i = 0; i < length; i++) {
                arr.push(0)
            }
            this.arr.push(arr)
        }
    }
    /* 改变当前颜色 */
    changeColor () {
        if (this.currentColor == 'chessBlack') {
            this.currentColor = 'chessWhite';
            this.currentStatus = 2;
        } else {
            this.currentColor = 'chessBlack';
            this.currentStatus = 1;
        }
    }
    /* 落子 */
    addChess (clickX, clickY) {
        const x = Math.floor(clickX / this.chessWH)
        const y = Math.floor(clickY / this.chessWH)
        if (this.arr[x][y] != 0) { // 防止重复落子
            return
        }
        this.arr[x][y] = this.currentStatus;
        this.history.push({ // 增加历史
            x: x,
            y: y
        })
        /* 创建棋子 */
        const chess = new Chess()
    }
}

export default Context;


