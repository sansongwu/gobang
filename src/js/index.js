import "babel-polyfill";
import '../css/index.scss';

import Interface from './components/userInterface.js'
import ChessBoard from './components/chessboard';
import config from './config'
import Context from './components/context'
import WinOrLose from './components/winOrLose'

/* 实例化界面 */
const userInterface = new Interface();
/* 实例化棋盘 */
const chessBoard = new ChessBoard(document.getElementById('playground'), config.lineNum, true)

/* 实例化context */
const context = new Context()

/* 实例化 判断胜负类 */
const winOrLose = new WinOrLose(context)

// DEMO 修改按钮点击事件demo
Interface.basicButton[0].callBack = function () {
    console.log('test')
}

// 点击棋盘
chessBoard.addEventListener('click', e => {
    // console.log(e.offsetX)
    // console.log(e.offsetY)
    context.addChess(e.offsetX, e.offsetY, chessBoard)
    /* 是否继续  一方胜利不继续  先手双3不继续 棋盘满了不继续 */

    if (winOrLose.getResult()) {
        alert('当前色胜利')
        return
    }

    /* 改变环境状态 */
    context.changeColor()
}, false)
