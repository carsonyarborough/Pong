//update loop
import Ball from './Ball.js'

const ball = new Ball(document.getElementById("ball"))

let lastTime 
function update(time) {
if (lastTime != null){
    const delta = time -lastTime
    //update code
    ball.update(delta)
}
   
  lastTime = time
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)