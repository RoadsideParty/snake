import Food from "./food"
import { ICanvasOption, ISnakeItem } from "./type"

export default class Snake {
    x: number = 0
    y: number = 0
    xSpeed: number = 0
    ySpeed: number = 0
    canvasOption: ICanvasOption
    foodIns: Food
    eatFoodNum: number = 0
    tails: ISnakeItem[] = []
    constructor(canvasOption: ICanvasOption, foodIns: Food) {
        this.canvasOption = canvasOption
        const { gridSize } = this.canvasOption
        this.xSpeed = gridSize
        this.foodIns = foodIns
    }
    draw() {
        const { ctx, gridSize } = this.canvasOption
        ctx.fillStyle = 'red'
        for (let i = 0; i < this.tails.length; i++) {
            const { x, y } = this.tails[i]
            ctx.fillRect(x, y, gridSize, gridSize)
        }
        ctx.fillRect(this.x, this.y, gridSize, gridSize)
    }
    update() {
        this.x += this.xSpeed
        this.y += this.ySpeed
        for (let i = 0; i < this.tails.length; i++) {
            this.tails[i] = this.tails[i + 1]
        }
        if (this.eatFoodNum > 0) {
            this.tails[this.eatFoodNum - 1] = { x: this.x, y: this.y }
        }
        this.draw()
    }
    dir(e: KeyboardEvent) {
        const { gridSize } = this.canvasOption
        switch (e.keyCode) {
            // up
            case 38:
                this.xSpeed = 0
                this.ySpeed = -gridSize
                break;
            // down
            case 40:
                this.xSpeed = 0
                this.ySpeed = gridSize
                break;
            // left
            case 37:
                this.xSpeed = -gridSize
                this.ySpeed = 0
                break;
            // right
            case 39:
                this.xSpeed = gridSize
                this.ySpeed = 0
                break;
        }

    }
    eat() {
        if (this.x === this.foodIns.x && this.y === this.foodIns.y) {
            this.eatFoodNum++
            return true
        }
        return false
    }
}