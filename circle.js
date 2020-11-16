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

    cycloid(ctx, stageWidth, stageHeight) {
        for(let i = 0; i <= 360; i = i + 10) {
            ctx.strokeStyle = "#fdd700";
            ctx.beginPath();
            
            this.x = stageHeight * Math.cos(Math.PI / 180) * i;
            this.y = stageWidth * Math.sin(Math.PI / 180) * i;
            
            ctx.moveTo(this.x, this.y);
            ctx.arcTo(this.x, this.y, this.x + 1, this.y + 1, 10);
            ctx.stroke();
        }
    }
}