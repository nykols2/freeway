//imagens e sons


//imagens

let imgEstrada;
let imgJacare;
let imgCarro1;
let imgCarro2;
let imgCarro3;


//sons
let somTrilha
let somPonto
let somColisao


function preload(){
  imgEstrada = loadImage("imagens/estrada.png")
  imgJacare = loadImage("imagens/jacare.png")
  imgCarro1 = loadImage ("imagens/carro-1.png")
  imgCarro2 = loadImage ("imagens/carro-2.png")
  imgCarro2c = loadImage ("imagens/carro-2c.png")
  imgCarro3 = loadImage ("imagens/carro-3.png")
  imgCarro3c = loadImage ("imagens/carro-3c.png")
  imgCarro4 = loadImage ("imagens/carro-4.png")
  
  imgCarros = [imgCarro1, imgCarro2, imgCarro2c, imgCarro3, imgCarro3c, imgCarro4];
  
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/ponto.mp3");
  somVitoria = loadSound("sons/vitoria.mp3");
  somDerrota = loadSound("sons/derrota.mp3");
}