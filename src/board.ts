import { ICanvasOption } from "./type"

export default class Board {
    canvasOption: ICanvasOption
    constructor(canvasOption: ICanvasOption) {
        this.canvasOption = canvasOption
    }
    draw() {
        const { ctx, size } = this.canvasOption
        ctx.fillStyle = 'skyblue'
        ctx.fillRect(0, 0, size, size)
    }
}