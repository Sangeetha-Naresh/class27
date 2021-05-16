class Chain
{
    constructor(body1, body2)
    {
        var choptions=
        {
            bodyA: body1,
            bodyB: body2,
            stiffness:0.04,
            length:10
        }
    
        this.ch=Constraint.create(choptions);
        World.add(world,this.ch);
    }

    display()
    {
        var pointA=this.ch.bodyA.position;
        var pointB=this.ch.bodyB.position;
        line(pointA.x, pointA.y,pointB.x,pointB.y);
    }
}