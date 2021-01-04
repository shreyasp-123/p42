class Drop{
    constructor(x, y){
        var options = {
            isStatic: false,
            friction: 0.2
        }
        this.body = Bodies.circle(x, y, 10, options)
        World.add(world, this.body)
    }
    update(){
        var pos = this.body.position
        if(pos.y > height){
            Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})
        }
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        fill("blue")
        translate(pos.x, pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0, 0, 10, 10)
        pop()
    }
}