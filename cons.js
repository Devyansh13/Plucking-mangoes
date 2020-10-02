class string{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.004,
            //length: 10
        }
        this.pointA = pointA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){

        
            var pointA = this.pointA;
            var bodyB = this.sling.bodyB.position;
            push();
            
            fill("black");
            stroke("black");
            strokeWeight(30);
            line(pointA.x,pointA.y,bodyB.x,bodyB.y);
            pop();
        }
           
        
    }
    
