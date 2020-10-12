class Paper {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.r=70;
        this.body=Bodies.circle(200,450,this.r/2,options);
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        //fill(255,0,255);
       // ellipse(0,0,this.r,this.r);
        pop();
    }
}