var bubble = "";

var hit_bubble;

var rn ;
 
var timer = 60;

var score = 0; 

var hit_bubble ;

function makebubbles(){
for(var i = 1;i<=45;i++){
    hit_bubble = Math.floor(Math.random()*10);
    bubble += `<div id="bubble">${hit_bubble}</div>`;
    }

document.getElementById("p-bottom").innerHTML = bubble;
}

function runtime(){
    var c_timer = setInterval(function(){
      if(timer>0){
        timer-=1;
        document.getElementById("timerval").textContent = timer;
    }
    else{
        clearInterval(c_timer);
        document.getElementById("p-bottom").innerHTML = `Game Over your score is ${score}`;
        document.getElementById("p-bottom").style.alignItems = "center";
        document.getElementById("p-bottom").style.justifyContent = "center";
        document.getElementById("p-bottom").style.fontSize = "34px";
        document.querySelector("button").style.display = "block";
    }
    },1000);  
}

function make_new_hit(){
    rn = Math.floor(Math.random()*10);
    document.getElementById("hitval").textContent = rn;
}

function increaseScore(){
    score += 10;
    document.getElementById("scoreval").textContent = score;
}

document.getElementById("p-bottom").addEventListener("click", function(details){
    var clicknum = Number(details.target.textContent);
    if(clicknum === rn){
        increaseScore();
        make_new_hit();
    }
});

runtime();
makebubbles();
make_new_hit();