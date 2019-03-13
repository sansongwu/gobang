import "babel-polyfill";
import '../css/index.scss';

import Interface from './components/userInterface.js'
import ChessBoard from './components/chessboard';
import config from './config'
import Context from './components/context'

/* 实例化界面 */
const userInterface = new Interface();
/* 实例化棋盘 */
const chessBoard = new ChessBoard(document.getElementById('playground'), config.lineNum, true)

/* 实例化context */
const context = new Context()

// DEMO 修改按钮点击事件demo
Interface.basicButton[0].callBack = function () {
    console.log('test')
}

// 点击棋盘
chessBoard.addEventListener('click', e => {
    console.log(e)
    console.log(e.offsetX)
    console.log(e.clientX)
})
