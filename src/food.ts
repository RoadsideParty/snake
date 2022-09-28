import { ICanvasOption } from "./type";

export default class Food {
    x: number = 0
    y: number = 0
    canvasOption: ICanvasOption
    constructor(canvasOption: ICanvasOption) {
        this.canvasOption = canvasOption
        this.randomPos()
    }
    draw() {
        const { ctx, gridSize } = this.canvasOption
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x, this.y, gridSize, gridSize)
    }
    randomPos() {
        const { size, gridSize } = this.canvasOption
        const gridNum = size / gridSize
        this.x = Math.floor(Math.random() * gridNum) * gridSize
        this.y = Math.floor(Math.random() * gridNum) * gridSize
    }
}