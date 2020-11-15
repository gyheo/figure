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

            this.centerCircle = new Circle(this.stageWidth, this.stageHeight, 150);
            
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

            this.centerCircle.draw(this.ctx, this.stageWidth / 2, this.stageHeight / 2);
        }
}

window.onload = () => {
    new App();
}