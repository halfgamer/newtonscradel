class Chain {
    constructor(firstbody,secondbody){
        var option={
            bodyA:firstbody,
            bodyB:secondbody,
            lenght:10,
            stiffness:0.08
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var point1x=this.chain.bodyA.position;
        var point2x=this.chain.bodyB.position
        push ();
        strokeWeight(3);
        
       
        line(point1x.x,point1x.y,point2x.x,point2x.y)
        pop ();
    }
}