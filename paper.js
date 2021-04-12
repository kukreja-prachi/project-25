class Paper{
    constructor(x,y,radius){
        var options = {
            'isStatic' : false , 
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
   
    this.radius=radius
    this.body = Bodies.circle(x , y , radius , options);
    this.image = loadImage("Images/paper.png");
    World.add(world , this.body);
    }

display(){
    fill("white");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x , this.body.position.y , this.radius , this.radius)
    rotate(angle);
    imageMode(CENTER);
     image(this.image,pos.x,pos.y,33,33);
 }
}