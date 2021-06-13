class chain{
constructor(bodyA,pointB)
{
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness: 0.04  
    }
    this.pointB=pointB
    this.chain=Constraint.create(options)
    World.add(world,this.chain)
}
display(){
    if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
