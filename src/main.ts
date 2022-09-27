interface IGrid {
  x: number,
  y: number,
  state: number
}
class Game {
  el: HTMLElement
  size: number
  speed: number
  board: IGrid[][] = []
  constructor(el: HTMLElement, size: number = 30, speed: number = 1) {
    this.el = el
    this.size = size
    this.speed = speed
    this.init()
  }
  init() {
    this.createLayout()
  }
  createLayout() {
    for (let i = 0; i < this.size; i++) {
      const iDivDom = document.createElement('div')
      this.el.appendChild(iDivDom)
      for (let j = 0; j < this.size; j++) {
        // this.board[i].push({
        //   x: i,
        //   y: j,
        //   state: 0
        // })
      }
    }
    // for (let i = 0; i < this.size; i++) {
    //   this.board[i] = []
    //   for (let j = 0; j < this.size; j++) {
    //     this.board[i].push({
    //       x: i,
    //       y: j,
    //       state: 0
    //     })
    //   }
    // }
  }
}
export default Game