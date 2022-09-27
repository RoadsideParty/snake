interface IGrid {
  x: number,
  y: number
}
export default class Game {
  el: HTMLElement
  boardSize: number
  gridNum: number
  gridSize: number
  speed: number
  board: HTMLCanvasElement = document.createElement('canvas')
  ctx: CanvasRenderingContext2D = this.board.getContext('2d')!
  snake: IGrid[] = []
  constructor(el: HTMLElement, boardSize: number = 500, gridNum: number = 25, speed: number = 1000) {
    this.el = el
    this.boardSize = boardSize
    this.gridNum = gridNum
    this.gridSize = boardSize / gridNum
    this.speed = speed
    this.init()
  }
  init() {
    this.createLayout()
    this.createFood()
    // this.createSnake()
    this.snakeMove()
  }
  createLayout() {
    this.board.width = this.board.height = this.boardSize
    this.el.appendChild(this.board)
    this.ctx.strokeRect(0, 0, this.boardSize, this.boardSize)
    for (let i = 0; i < this.gridNum; i++) {
      this.drawLine(0, this.gridSize * i, this.boardSize, this.gridSize * i)
      for (let j = 0; j < this.gridNum; j++) {
        this.drawLine(this.gridSize * j, 0, this.gridSize * j, this.boardSize)
      }
    }
  }
  createFood() {
    const randomX = Math.floor(Math.random() * this.gridNum) * this.gridSize
    const randomY = Math.floor(Math.random() * this.gridNum) * this.gridSize
    this.ctx.fillStyle = 'red'
    this.drawRect(randomX, randomY)
  }
  createSnake(len: number) {
    for (let i = 0; i < len; i++) {
      this.snake.push({
        x: this.gridSize * i,
        y: 0
      })
    }
    this.ctx.fillStyle = 'black'
    this.snake.forEach(item => {
      this.drawRect(item.x, item.y)
    })
  }
  snakeMove() {
    // this.ctx.clearRect(0, 0, this.boardSize, this.boardSize)
    this.snake = this.snake.map(item => {
      item.x = item.x + this.gridSize
      return item
    })
    this.createSnake(2)
  }
  drawLine(x: number, y: number, x1: number, y1: number) {
    this.ctx.beginPath()
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(x1, y1)
    this.ctx.stroke()
  }
  drawRect(x: number, y: number) {
    this.ctx.fillRect(x, y, this.gridSize, this.gridSize)
  }
}