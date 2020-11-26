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
        ctx.strokeStyle = "#fdd700";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }

    hypoCycloid(ctx, radius, stageWidth, stageHeight) {
        ctx.strokeStyle = "#fdd700";

        this.x = (stageWidth / 2) + Math.cos(Math.PI / 24 * this.round) * (radius - this.radius);
        this.y = (stageHeight / 2) + Math.sin(Math.PI / 24 * this.round) * (radius - this.radius);
        
        // 원 안의 반지름 그리기
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + Math.cos(Math.PI / 8 * this.round) * this.radius, this.y + Math.sin(Math.PI / 8 * this.round) * this.radius);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        // ctx.arc(this.x + Math.cos(Math.PI / 8 * this.round) * this.radius, this.y + Math.sin(Math.PI / 8 * this.round) * this.radius, this.radius, 0, Math.PI * 2);
        ctx.moveTo(this.x + Math.cos(Math.PI / 8 * this.round) * this.radius, this.y + Math.sin(Math.PI / 8 * this.round) * this.radius);
        
        ctx.quadraticCurveTo(stageWidth / 2 + Math.cos(Math.PI / 8 * this.round) * this.radius, stageHeight / 2 + Math.cos(Math.PI / 8 * this.round) * this.radius, this.x + Math.cos(Math.PI / 8 * this.round) * this.radius, this.y + Math.sin(Math.PI / 8 * this.round) * this.radius);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();

        this.round += 0.1;

        if(this.round > 360) {
            this.round = 1;
        }
    }
}