export class Circle {
    constructor(stageWidth, stageHeight, radius) {
        this.radius = radius;

        // canvas center
        this.x = stageWidth / 2;
        this.y = stageHeight / 2;
    }

    draw(ctx, stageWidth, stageHeight) {
        ctx.strokeStyle = "#fdd700";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }

    cycloid(ctx, radius, stageWidth, stageHeight) {
        ctx.strokeStyle = "#fdd700";
        for(let i = 0; i <= 60; i = i + 0.1) {
            this.x = (stageWidth / 2) + Math.cos(Math.PI / 8 * i) * radius;
            this.y = (stageHeight / 2) + Math.sin(Math.PI / 8 * i) * radius;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
}