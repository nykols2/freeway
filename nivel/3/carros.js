//carros


//listas

let xCarros = [550, 225, 100, 50, 300, 150];
let yCarros = [40, 96, 150, 210, 263, 318];
let velocidadeCarros = [-8.9, 11, -15.4, 9.6, -8.5, -6.0];
let comprimentoCarro = 60;
let alturaCarro = 40;



function mostraCarros(){
  for (let a = 0; a < imgCarros.length ; a++ ){
    image(imgCarros[a], xCarros[a], yCarros[a], comprimentoCarro, alturaCarro)
  }
}


function movimentaCarros(){
  
  for (let a = 0; a < xCarros.length ; a++){
    xCarros[a] -= velocidadeCarros[a];
  }
  
  

  

}

function loopCarros(){
  
  
  for (let a = 0 ; a < xCarros.length ; a++ ) {
          if (xCarros[a] < -75){
          xCarros[a] = 600
  }
  }
  
    for (let a = 0 ; a < xCarros.length ; a++ ) {
          if (xCarros[a] > 675){
          xCarros[a] = -60
  }
  }
  
  
}





