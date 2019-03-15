
import config from '../config'
import Chess from './chessPieces'
import chessColorStatusMap from '../map/chess_color_status.json'


debugger
const Context = class {
    constructor() {
        this.current = 'black';
        this.history = []; // 历史步骤
        this.arr = []; // 棋盘的数据映射
        this.chessWH = config.blockWH; // 棋子的宽高
        this._init();
    }
    _init() {
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
    changeColor() {
        if (this.current == 'black') {
            this.current = 'white';
        } else {
            this.current = 'black'
        }
    }
    /* 落子 */
    addChess(clickX, clickY, playground) {
        const x = Math.floor(clickX / this.chessWH)
        const y = Math.floor(clickY / this.chessWH)
        if (this.arr[y][x] != 0) { // 防止重复落子
            alert('选择正确的位置')
            return
        }
        const currentStatus = Number(chessColorStatusMap[this.current].status)
        this.arr[y][x] = currentStatus;
        this.history.push({ // 增加历史
            x: x,
            y: y,
            status: currentStatus  // 记录当前历史位置 是哪种棋
        })
        console.log(this.arr)
        /* 创建棋子 */
        const chess = new Chess(x, y, chessColorStatusMap[this.current].color)
        playground.appendChild(chess);
        
    }
}

export default Context;


