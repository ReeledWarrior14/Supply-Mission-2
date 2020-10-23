class HELI extends BOXES{
    constructor(x, y, width, height){
        super(x, y, width, height);
        Matter.Body.setStatic(this.Bodies3, true);
        this.image = loadImage("helicopter.png");
    }
    displayHeli(){
        super.display();
    }
}