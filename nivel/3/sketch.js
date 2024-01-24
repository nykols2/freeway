console.log("Freeway no JS - By Nykol")


function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  
  
  mostraJacare();
  mostraCarros();
  movimentaCarros();
  movimentaJacare();
  loopCarros();
  verificarColisao();
  mostraPontos();
  marcaPontos();
  limitarBordas();
  redirecionarProximoNivel();
  redirecionarNivelAnterior();
}


  
