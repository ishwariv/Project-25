class Dustbin{
    constructor(x,y){
        this.x=1100;
		this.y=500;
		this.bodyWidth=320;
		this.bodyHeight=160;
        this.bodyThickness=100;
        this.angle=0;
		
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.bodyWidth, this.bodyThickness, {isStatic:true});
		this.image = loadImage("sprites/dustbingreen.png");

		this.leftBody=Bodies.rectangle(this.x-this.bodyWidth/2, this.y-this.bodyHeight/2, this.bodyThickness, this.bodyHeight, {isStatic:true});
		Matter.Body.setAngle(this.leftBody, this.angle);
		
		this.rightBody=Bodies.rectangle(this.x+this.bodyWidth/2, this.y-this.bodyHeight/2, this.bodyThickness, this.bodyHeight, {isStatic:true});
		Matter.Body.setAngle(this.rightBody, -1*this.angle);
	
		World.add(world, this.bottomBody);
		World.add(world, this.leftBody);
		World.add(world, this.rightBody);
    }
    display(){
        push();
		translate(this.leftBody.position.x,this.leftBody.position.y);
		rectMode(CENTER);
		angleMode(RADIANS);
		rotate(this.angle);
		stroke(255);
		fill(255);
		rect(0,0,this.bodyThickness, this.bodyHeight);
		pop();

		push();
		translate(this.rightBody.position.x,this.rightBody.position.y);
		rectMode(CENTER);
		angleMode(RADIANS);
		rotate(-1*this.angle);
		stroke(255);
		fill(255);
		rect(0,0,this.bodyThickness, this.bodyHeight);
		pop();

		push();
		translate(this.bottomBody.position.x,this.bottomBody.position.y);
		imageMode(CENTER);
		angleMode(RADIANS);
		stroke(255);
		fill(255);
		rect(0,0,this.bodyWidth, this.bodyThickness);
		image(this.image,0,0,this.width,this.height);
		pop();	
    }
}