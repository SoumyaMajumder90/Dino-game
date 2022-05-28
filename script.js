var score= 0;
bgm = new Audio('bgm.mp3');
go = new Audio('go.mp3');
setTimeout(() => {
    bgm.play();
}, 1000);
cross= true;
document.onkeydown = function(e){
    console.log("The keycode is", e.key);
    if(e.key=='ArrowUp'){
            dino = document.querySelector('.dino');
            dino.classList.add('dino2');
            setTimeout(() => {
                dino.classList.remove('dino2');
            }, 700);
    }
    if(e.key=='ArrowRight'){
        dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX +100+ "px";
}
if(e.key=='ArrowLeft'){
    dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX -100+ "px";
}
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);
    if(offsetX<140 &&offsetY<140){
        gameover.innerHTML='Game Over-Reload to start';
        obstacle.classList.remove('obstacle1');
        go.play();
        bgm.pause();
    }
    else if(offsetX<145 && cross){
        
        score+=1;
        update(score); 
        cross= false;
        setTimeout(() => {
            cross=true;
        }, 1000);
       
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.2;
            obstacle.style.animationDuration = newDur + 's';
        }, 1000);


    }

}, 40);

function update(score){
    scorecount.innerHTML = "Your Score: "+score;
}