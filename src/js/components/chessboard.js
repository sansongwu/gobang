
import {blockWH} from '../config'

const ChessBoard = class {
    constructor (interfaceDOM, squareNum, isNest = false) {
        this.parentsNode = interfaceDOM;
        this.squareNum = squareNum;
        this.isNest = isNest;
        this._init()
        return this.parentsNode;
    }
    _init () {
        const ul = document.createElement('ul');
        for (let i = 0; i < this.squareNum; i ++) {
            const li = document.createElement('li')
            const ulRow = document.createElement('ul');
            ulRow.className = 'row'
            li.appendChild(ulRow);
            for (let j = 0; j < this.squareNum; j ++) {
                const liRow = document.createElement('li')
                if (this.isNest) {
                    liRow.className = 'block'
                    liRow.id = 'block'
                    new ChessBoard(liRow, 2) // 生成小格子
                } else {
                    liRow.className = 'least';
                    liRow.style = `width: ${ blockWH / 2 }px; height: ${ blockWH / 2 }px`;
                }
                ulRow.appendChild(liRow)
            }
            ul.appendChild(li)
        }
        this.parentsNode.appendChild(ul)
    }
}

export default ChessBoard
