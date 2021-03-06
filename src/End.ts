/// <reference path="View.ts" />

class End extends View {
    private backToStartMenuButton: Button;
    private endText: string;
    private lineColor: string;

    constructor(canvas: HTMLCanvasElement, endText: string, lineColor: string, language:string) {
        super(canvas);
        document.getElementById("desTop").style.visibility = "hidden";
        document.getElementById("desLeft").style.visibility = "hidden";
        document.getElementById("desRight").style.visibility = "hidden";
        document.getElementById("desBottom").style.visibility = "hidden";

        let btnText = "";
        if(language === "dutch"){
            btnText = "Terug naar begin scherm"; 
        }
        else{
            btnText = "Back to start menu";
        }
        this.backToStartMenuButton = new Button(
            this.canvas,
			this.canvas.width * 0.20,
			this.canvas.height * 0.19,
			this.canvas.width / 2 - (this.canvas.width * 0.19)/2,
			this.canvas.height * 0.77 - (this.canvas.height * 0.19)/2,
			"dodgerblue",
            btnText
        );

        // load the image
        this.image = this.loadNewImage('./assets/img/bg.jpg');

        // ending text
        this.endText = endText;

        // color of the line at the top behind the text
        this.lineColor = lineColor;
    }

    /**
     * Function for getting the button's information
     */
    public getButton = () => {
        return this.backToStartMenuButton;
    };

    /**
	 * Method to draw the start menu on the canvas
	 * @param {CanvasRenderingContext2D} ctx
	 */
	public draw = (ctx: CanvasRenderingContext2D) => {
		// Draw the background color
		ctx.fillStyle = Game.BASE_COLOR;
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// Draws the image/logo
		ctx.drawImage(
			this.image,
			this.canvas.width / 2 - this.image.width / 2,
            this.canvas.height / 2 - this.image.height / 2,
        );

        ctx.fillStyle = this.lineColor;
        ctx.fillRect(0, 50, this.canvas.width, 100);
        
        ctx.textAlign = "center";
        ctx.font = '25px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(this.endText, this.canvas.width/2, 110)
	};
}
