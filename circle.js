export class Circle {
    constructor(stageWidth, stageHeight, radius) {
        const diameter = this.radius * 2;

        this.x = this.radius + (Math.random() * stageWidth - diameter);
        this.y = this.radius + (Math.random() * stageHeight - diameter);
    }

    draw(ctx, stageWidth, stageHeight) {
        ctx.strokeStyle = "#fdd700";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}