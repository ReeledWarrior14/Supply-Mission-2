class GROUND {
    constructor(x, y, width, height){
        var options3 = {
            isStatic : true
        }
        this.Bodies3 = Bodies.rectangle(x, y, width, height, options3);
        Worlds.add(world, this.Bodies3);
        this.width = width;
        this.height = height;
    }        
    display(){
        var x = this.Bodies3.position.x;
        var y = this.Bodies3.position.y;
        push();
        fill(120);
        rect(x, y , this.width, this.height);
        pop();
    }
}