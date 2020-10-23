class BOXES{
    constructor(x, y, width, height){
        var optionsRemake4 = {
            restitution : 1,
            friction : 0.5,
            // density : 1.5,
            isStatic : true,
        }
        this.Bodies3 = Bodies.rectangle(x, y, width, height, optionsRemake4);
        // Matter.Body.setStatic(this.Bodies3, isStatic);
        Worlds.add(world, this.Bodies3);
        this.width = width;
        this.height = height;
        this.image = loadImage('package.png');
    }      
    display(){
        var pos = this.Bodies3.position;
        push();
        translate(pos.x, pos.y);
        // rotate(angle * 2);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}