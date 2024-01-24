//jacare

let xJacare = 120;
let yJacare = 375;
let colisao = false;


//placar 
let pontosJogador = 0



function mostraJacare(){
  image(imgJacare, xJacare, yJacare, 36, 36)
}


function movimentaJacare(){
  if (keyIsDown(38)){
    yJacare -= 3
  }
  
    if (keyIsDown(40)){
    yJacare += 3
  }
  
      if (keyIsDown(39)){
    xJacare += 3
  }
  
      if (keyIsDown(37)){
    xJacare -= 3
  }
}




function verificarColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let a = 0; a < imgCarros.length; a++ ){
    colisao = collideRectCircle(xCarros[a], yCarros[a], comprimentoCarro, alturaCarro, xJacare, yJacare, 15)
    if (colisao){
        colidiu();
    }
  }
}


function colidiu(){
  yJacare = 375; xJacare = 120; somColisao.play(); pontosJogador -= 1; 
}







function mostraPontos(){
  fill (color(255,0,0))
  textAlign(CENTER)
  textSize (30)
  text (pontosJogador, 70, 28)
  
}


function marcaPontos(){
  if (yJacare < -30){
    pontosJogador += 1 ; yJacare = 380; xJacare = 120; somPonto.play();
  }
}





function limitarBordas(){
  if (yJacare > 410){ yJacare = 375 }
  
  if (xJacare < -36){ xJacare = 120 ; yJacare = 375}
  
  if (xJacare > 600){ xJacare = 20 ; yJacare = 375}
  
}



//Proximo nivel

function redirecionarProximoNivel(){
  if (pontosJogador > 0) { 
    somVitoria.play();
    setTimeout(() => {
      window.location.href = '../vitoria/';
    }, 2100);

  }
}

function redirecionarNivelAnterior(){
  if (pontosJogador < -4) { 
    pontosJogador = 0
    somDerrota.play();
    setTimeout(() => {
      window.location.href = '../2/';
    }, 1000);
  }
}