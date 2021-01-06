class Enemy {
    private speed: number;
    private xPos: number;
    private yPos: number;
    private image: HTMLImageElement;
    private radius: number;
    private color: string;
    private xVel: number;
    private yVel: number;

    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        // this.image = this.loadNewImage(image);
        this.speed = 5;

        this.xPos = this.randomNumber(0, canvas.width);
        this.yPos = this.randomNumber(0, canvas.height);
        this.radius = 10;
        this.color = "#FFFF00";
        this.xVel = 3;
        this.yVel = 2.5;
    }

    /**
     * Draws the enemies during each frame
     * @param ctx
     */
    public draw = (ctx: CanvasRenderingContext2D, sAngle: number, eAngle: number) => {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, sAngle, eAngle);
        ctx.closePath();
        ctx.fill();
        this.moveBall();
    };

    /**
     * Load the image of the enemies
     * @param source string
     */
    private loadNewImage = (source: string): HTMLImageElement => {
        const img = new Image();
        img.src = source;
        img.width = this.canvas.width * 0.1;
        img.height = img.width;
        return img;
    };

    // /**
    //  * Function for the enemies to detect the wall and do not move out from the scope
    //  */
    // private wallDetection() {
    //     if (this.yPos < this.canvas.height - this.image.height) {
    //         this.yPos += this.speed;
    //     }

    //     if (this.yPos > 0) {
    //         this.yPos -= this.speed;
    //     }
    //     if (this.xPos > 0) {
    //         this.xPos -= this.speed;
    //     }
    //     if (this.xPos < this.canvas.width - this.image.width) {
    //         this.xPos += this.speed;
    //     }
    // }

    // getters and setters
    public getPositionX = () => {
        return this.xPos;
    };
    public getPositionY = () => {
        return this.yPos;
    };
    public getWidth = () => {
        return this.image.width;
    };
    public getHeight = () => {
        return this.image.height;
    };

    /**
     * Function to move the ball and let it 'bounche' to the boundaries of the canvas
     */
    public moveBall() {
        if (this.xPos + this.radius > this.canvas.width || this.xPos - this.radius < 0) {
            this.xVel = -this.xVel;
        }
        if (this.yPos + this.radius > this.canvas.height || this.yPos - this.radius < 0) {
            this.yVel = -this.yVel;
        }

        this.xPos += this.xVel;
        this.yPos += this.yVel;
    }

    /**
     * Renders a random number between min and max
     * @param min
     * @param max
     */
    private randomNumber = (min: number, max: number) => {
        return Math.round(Math.random() * (max - min) + min);
    };
}
