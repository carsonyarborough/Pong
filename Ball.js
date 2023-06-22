
const INITIAL_VELOCITY = .025


export default class Ball {
    constructor(ballElm){
        this.ballElm = ballElm
        this.reset()
    }

    get x(){
        return parsefloat(getComputedStyle(this.ballElm).getPropertyValue("--x"))
    }

set x(value){
    this.ballElm.style.setProperty("--x", value)
}

get y(){
    return parsefloat(getComputedStyle(this.ballElm).getPropertyValue("--y"))
}

set y(value){
this.ballElm.style.setProperty("--y", value)
}

reset(){
this.x = 50
this.y = 50
this.direction ={ x: 0}

while(Math.abs(this.direction.x) <= .2 || Math.abs (this.direction.x) >= .9){
    const heading = randomNumberBetween(0, 2 * Math.PI)
    this.direction = { x: Math.cos(heading), y : Math.sin(heading) }
}
this.velocity = INITIAL_VELOCITY 
}



    update(delta){
this.x += this.direction.x * this.velocity * delta
this.y += this.direction.y * this.velocity * delta
    }
}

function randomNumberBetween(min, max){
return Math.random() * (max - min) + min
}