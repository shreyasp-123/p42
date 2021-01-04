class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 200, options)
        this.image = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png")
        World.add(world, this.body)
        this.animation
    }
    display(){
        var pos = this.body.position
        animation(this.image, pos.x - 30, pos.y + 100, 100, 100)
    }
}