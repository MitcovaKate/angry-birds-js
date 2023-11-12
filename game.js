const MAP_W=500
const MAP_H=500 
function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
let birdLeft=getRandom(0,400)
let birdTop=getRandom(0,400)
let speedX=1
let direction="right"
let score=0
let intervalID
const initGame=()=>{
    map.style.width= `${MAP_W}px`
    map.style.height= `${MAP_H}px`
}
const startBird=()=>{
  bird.style.transition=`0s`
 birdLeft=getRandom(0,400)
 birdTop=getRandom(0,400)
 updteBirdStyle()
intervalID=setInterval(moveBird, 20);
}
const moveBird=()=>{ 
    if(birdTop>MAP_H ){ 
        score=`"Game over"` 
        scoreDisplay.innerHTML = score
        clearInterval(intervalID)
        birdTop=500
        birdLeft=250
        speedX=0
        
        // bird.style.transition=`0s`
        // bird.style.transform=`translateX(${birdLeft}px) 
        // translateY(${MAP_H + 10}px)  
        // scaleX(${direction=="left" ? -1 : 1})
        // rotate(0turn)`
        scoreDisplay.innerHTML+=`<button onclick="startBird()">Start again</button>`
    }
    birdLeft+=speedX
    if(birdLeft>=MAP_W-50){
    speedX *=-1
    direction = "left"
    birdTop+=getRandom(10,30)
    speedX *=1.05}
    if (birdLeft<=0){
        speedX *=-1
        direction = "right"
        birdTop+=getRandom(10,30)
        speedX *=1.05
    }
   
updteBirdStyle()
}
const updteBirdStyle=function(){
    // let sx=1
    // if(direction=="left"){sx =-1}
    bird.style.transform=`translateX(${birdLeft}px) 
                          translateY(${birdTop}px)  
                          scaleX(${direction=="left" ? -1 : 1})`
}
const SHOOT=function(){
    let cx=event.layerX + 25
    let cy=event.layerY + 25
    let bcx=birdLeft + 25
    let bcy=birdTop + 25
    if(Math.abs(cx -10  - bcx)<=10 && Math.abs(cy - 10  - bcy)<=10){
        score+=5 
        scoreDisplay.innerHTML = score
        clearInterval(intervalID)
        bird.style.transition=`1s`
        bird.style.transform=`translateX(${birdLeft}px) 
        translateY(${MAP_H}px)  
        scaleX(${direction=="left" ? -1 : 1})
        rotate(3.5turn)`
        setInterval(startBird,2000)
}
    }

startBird()
