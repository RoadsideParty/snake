import Board from "./board";
import Food from "./food";
import Snake from "./snake";
import { ICanvasOption } from "./type";

export default class Game {
  board: Board
  snake: Snake
  food: Food
  constructor(el: HTMLElement, size: number = 500, gridSize: number = 10, speed: number = 100) {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = size
    el.appendChild(canvas)
    const ctx = canvas.getContext('2d')!
    this.board = new Board({ ctx, size: size, gridSize })
    this.food = new Food({ ctx, size: size, gridSize })
    this.snake = new Snake({ ctx, size: size, gridSize }, this.food)
    this.init(speed, { ctx, size: size, gridSize })
  }
  init(speed: number, canvasOption: ICanvasOption) {
    this.board.draw()
    this.snake.draw()
    this.food.draw()
    this.update(speed, canvasOption)
  }
  update(speed: number, canvasOption: ICanvasOption) {
    const { ctx, size } = canvasOption
    window.addEventListener('keydown', e => this.snake.dir(e))
    setInterval(() => {
      ctx.clearRect(0, 0, size, size)
      this.board.draw()
      this.snake.update()
      this.food.draw()
      if (this.snake.eat()) {
        this.food.randomPos()
      }
    }, speed)
  }
}