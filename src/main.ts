import './style.css'
interface IGrid {
  x: number,
  y: number,
  state: number
}
class Game {
  el: HTMLElement
  size: number
  gridNum: number
  speed: number
  board: IGrid[][] = []
  constructor(el: HTMLElement, size: number = 500, gridNum: number = 25, speed: number = 1) {
    this.el = el
    this.size = size
    this.gridNum = gridNum
    this.speed = speed
    this.init()
  }
  init() {
    this.createLayout()
    this.createFood()
  }
  createLayout() {
    this.el.classList.add('board')
    this.el.style.width = this.size + 'px'
    this.el.style.height = this.size + 'px'
    for (let i = 0; i < this.gridNum; i++) {
      const rowDivDom = document.createElement('div')
      rowDivDom.classList.add('row')
      rowDivDom.style.height = this.size / this.gridNum + 'px'
      for (let j = 0; j < this.gridNum; j++) {
        const colDivDom = document.createElement('div')
        colDivDom.classList.add('col')
        colDivDom.style.width = this.size / this.gridNum + 'px'
        colDivDom.style.height = this.size / this.gridNum + 'px'
        rowDivDom.appendChild(colDivDom)
      }
      this.el.appendChild(rowDivDom)
    }
  }
  createFood() {
    const randomX = Math.floor(Math.random() * this.gridNum)
    const randomY = Math.floor(Math.random() * this.gridNum)
    const rows = document.querySelectorAll('.row')
    Array.from(rows)[randomX].children[randomY].classList.add('food')
  }
}
export default Game