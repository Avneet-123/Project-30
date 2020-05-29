class Shooter {
  constructor(x, y,width,height) {
    var options = {
        'restitution':0.3,
        //'friction':0.3,
        //'density':1.0
    }
    this.body = Bodies.circle(x, y,45,options);;
    this.radius = 45;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("yellow");
    stroke("black");
    ellipse(pos.x, pos.y, this.radius, this.radius);
   // pop();
  }
};