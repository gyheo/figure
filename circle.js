export class Circle {
    round = 1;

    constructor(stageWidth, stageHeight, radius) {
        this.radius = radius;

        // canvas center
        this.x = stageWidth / 2;
        this.y = stageHeight / 2;
    }

    // 원 그리기
    draw(ctx, stageWidth, stageHeight) {
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }

    fill(ctx, stageWidth, stageHeight) {
        ctx.fillStyle = "#f57f17";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    hypoCycloid(ctx, radius, stageWidth, stageHeight) {
        ctx.strokeStyle = "#0066CC";
        ctx.fillStyle = "#0066CC";

        this.x = (stageWidth / 2) + Math.cos(Math.PI / 24 * this.round) * radius;
        this.y = (stageHeight / 2) + Math.sin(Math.PI / 24 * this.round) * radius;
        
        // 원 안의 반지름 그리기
        // ctx.beginPath();
        // ctx.moveTo(this.x, this.y);
        // ctx.lineTo(this.x + Math.cos(Math.PI / 8 * this.round) * this.radius, this.y + Math.sin(Math.PI / 8 * this.round) * this.radius);
        // ctx.closePath();
        // ctx.stroke();

        let centerX = (stageWidth / 2) + Math.cos(Math.PI / 24 * this.round) * this.radius;
        let centerY = (stageHeight / 2) + Math.sin(Math.PI / 24 * this.round) * this.radius;

        // ctx.beginPath();
        // ctx.moveTo(this.x + Math.cos(Math.PI / 8 * this.round) * this.radius, this.y + Math.sin(Math.PI / 8 * this.round) * this.radius);
        // ctx.quadraticCurveTo(stageWidth / 2 + Math.cos(Math.PI / 8 * this.round) * this.radius, stageHeight / 2 + Math.cos(Math.PI / 8 * this.round) * this.radius, this.x + Math.cos(Math.PI / 8 * this.round) * this.radius, this.y + Math.sin(Math.PI / 8 * this.round) * this.radius);
        // ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        this.round += 0.1;

        if(this.round > 360) {
            this.round = 1;
        }
    }
}