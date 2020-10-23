class BOXES2{
    constructor(x, y, width, height){
        var optionsRemake4 = {
            restitution : 1,
            friction : 0.5,
            density : 1.5,
            isStatic : true,
        }
        this.Bodies3 = Bodies.rectangle(x, y, width, height, optionsRemake4);
        Worlds.add(world, this.Bodies3);
        this.width = width;
        this.height = height;
    }      
    display(){
        var pos = this.Bodies3.position;
        push();
        translate(pos.x, pos.y);
        // rotate(angle * 2);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}