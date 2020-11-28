import {
    Circle
} from "./circle.js";

class App {
        constructor() {
            // Draw resize canvas From Interactive Developer https://youtu.be/sLCiI6d5vTM
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');

            document.body.appendChild(this.canvas);

            window.addEventListener('resize', this.resize.bind(this), false);
            this.resize();

            this.outerCircle = new Circle(this.stageWidth, this.stageHeight, 150);
            this.innerCircle = new Circle(this.stageWidth, this.stageHeight, 20);
            this.centralCircle = new Circle(this.stageWidth, this.stageHeight, 50);
            
            window.requestAnimationFrame(this.animate.bind(this));
        }
        
        resize() {
            this.stageWidth = document.body.clientWidth;
            this.stageHeight = document.body.clientHeight;
    
            this.canvas.width = this.stageWidth * 2;
            this.canvas.height = this.stageHeight * 2;
            this.ctx.scale(2, 2);
        }

        animate () {
            window.requestAnimationFrame(this.animate.bind(this));
            this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
            
            this.outerCircle.draw(this.ctx, this.stageWidth, this.stageHeight);
            this.centralCircle.fill(this.ctx, this.stageWidth, this.stageHeight);
            this.innerCircle.hypoCycloid(this.ctx, this.outerCircle.radius, this.stageWidth, this.stageHeight);
        }
}

window.onload = function(){
    new App();
};