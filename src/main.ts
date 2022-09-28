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
  }
  createLayout() {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = this.boardSize
    this.el.appendChild(canvas)
    const ctx = canvas.getContext('2d')!
    ctx.strokeRect(0, 0, this.boardSize, this.boardSize)
    for (let i = 0; i < this.gridNum; i++) {
      this.drawLine(ctx, 0, this.gridSize * i, this.boardSize, this.gridSize * i)
      for (let j = 0; j < this.gridNum; j++) {
        this.drawLine(ctx, this.gridSize * j, 0, this.gridSize * j, this.boardSize)
      }
    }
    this.createFood(ctx)
    this.createSnake(3)
    // this.snakeMove()
  }
  createFood(ctx: CanvasRenderingContext2D) {
    const randomX = Math.floor(Math.random() * this.gridNum) * this.gridSize
    const randomY = Math.floor(Math.random() * this.gridNum) * this.gridSize
    ctx.fillStyle = 'red'
    this.drawRect(ctx, randomX, randomY)
  }
  createSnake(len: number) {
    for (let i = 0; i < len; i++) {
      this.snake.push({
        x: this.gridSize * i,
        y: 0
      })
    }
    ctx.fillStyle = 'black'
    this.snake.forEach(item => {
      this.drawRect(ctx, item.x, item.y)
    })
  }
  // snakeMove() {
  //   ctx.clearRect(0, 0, this.boardSize, this.boardSize)
  //   this.snake = this.snake.map(item => {
  //     item.x = item.x + this.gridSize
  //     return item
  //   })
  //   this.createSnake()
  // }
  drawLine(ctx: CanvasRenderingContext2D, x: number, y: number, x1: number, y1: number) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x1, y1)
    ctx.stroke()
  }
  drawRect(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.fillRect(x, y, this.gridSize, this.gridSize)
  }
}