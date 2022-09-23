var drops;
class createDrops {
    constructor(x ,y){
        var options = {
            'restitution':0.1,
            'friction':0.01
        }
      
        this.body = Bodies.circle( x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);

    var maxDrops=100;

    for(var i=0; i<maxDrops; i++) {
        drops.push(new createDrops(random(0,400), random(0,400)));
    }
}

 }

 

 