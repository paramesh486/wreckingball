class Rope{
    constructor(l,m){
    var options = {
        bodyA:l,
        pointB:m,
        stiffness:0.5
    }  ;
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }
    display(){
        var pointA = this.body.bodyA.position
        var pointB = this.body.pointB
        push ()
        stroke("yellow")
        strokeWeight(3)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop ()
    }

}