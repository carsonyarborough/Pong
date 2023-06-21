export default class Ball {
    constructor(ballElm){
        this.ballElm = ballElm
        this.reset()
    }

    get x(){
        return parsefloat(getComputedStyle(this.ballElm).getPropertyValue("--x"))
    }

set x(value){
    this.ballElm.setProperty("--x", value)
}

get y(){
    return parsefloat(getComputedStyle(this.ballElm).getPropertyValue("--y"))
}

set y(value){
this.ballElm.setProperty("--y", value)
}

reset(){
this.x = 50
this.y = 50
this.direction ={ x: .75, y : .5}
}



    update(delta){
this.x = 5
this.y = 15
    }
}

