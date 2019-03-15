
import config from '../config'

const Chess = class {
    constructor (x, y, currentColor) {
        this.x = x;
        this.y = y;
        this.currentColor = currentColor;
        return this.createChess();
    }
    createChess () {
        const chessDOM = document.createElement('div');
        chessDOM.className = 'chess';
        const backgroundColor = this.currentColor
        chessDOM.style = `left: ${ this.x * config.blockWH }px;top: ${ this.y * config.blockWH }px;height: ${ config.blockWH }px;width: ${ config.blockWH }px;background-color: ${ backgroundColor }`
        return chessDOM;
    }
}

export default Chess;
