/* 整体的界面类 */
const Interface = class {
    constructor () {
        this.parentNode = document.body;
        this.menu = ''
        this._init();
    }
    _init () {
        /* 拼接字符串 */
        let buttonStr = '';
        for (let i = 0; i < Interface.basicButton.length; i++) {
            const element = Interface.basicButton[i]
            buttonStr += `<li id=${ element.name }>${ element.text }</li>`
        }
        this.parentNode.innerHTML = `
            <div class="container">
                <div class="wrap">
                    <div class="menu" id="menu">
                        <ul>${ buttonStr }</ul>
                    </div>
                    <div class="playground" id="playground">

                    </div>
                </div>
            </div>`
        this.menu = document.querySelector('#menu')
        // this.menu.innerHTML = 'test'
        /* 绑定事件 */
        for (let i = 0; i < Interface.basicButton.length; i++) {
            const element = Interface.basicButton[i]
            document.querySelector(`#${ element.name }`).addEventListener('click', () => {
                element.callBack()
            })
        }
    }
    // getOffsetXY () {
    //     const target = document.querySelector('#playground')
    //     this.playgroundOffsetX = target
    // }
}
Interface.basicButton = [
    {
        name: 'begin',
        text: '开始',
        callBack() {
            console.log('点击了开始')
        }
    },
    {
        name: 'restart',
        text: '重开',
        callBack() {
            console.log('点击了重开')
        }
    },
    {
        name: 'back',
        text: '悔棋',
        callBack() {
            console.log('点击了悔棋')
        }
    }
]

const testFoo = () => {
    alert('test')
}

export default Interface;
