//Aldana del Viso
//tp1 - comision 3
//Video: https://youtu.be/O9mHbf4nLwM


let imagen;
let cantC, cantF, xdesp, tam, posX, posY;
let tamCirculo;
let estadoOriginal;

function preload (){
    imagen =loadImage("data/imagen.jpeg");
}
  
function setup(){
  createCanvas(800,400);
  cantC=14;
  cantF=9;
  tam=50;
  xdesp=0;
  stroke(128);
  strokeWeight(3.5);
  estadoOriginal=true;
}
function draw(){
  background(255);
  image(imagen,0,0, 700, 400);
  for (let x =0; x < cantC; x++) {//columna
    for (let y =0 ; y < cantF; y++) {//fila
      xdesp= calcularDesplazamiento(y);//se calcula el desplazamiento para el cuadrado
      posX=x*tam+xdesp+400;
      posY=y*tam;
      cuadrado(posX,posY,tam, x);
      if(!estadoOriginal){
        tamCirculo=map(mouseX, 0, width,0,100);
        posX=posX-xdesp;
        posY=posY-tam/2;
        circulo(posX,posY,tamCirculo,x);
      }

    }
  }
}

// devuelve true o false dependiendo si el numero pasado por parametro es par o impar 
function esPar( num){
   return num % 2 == 0;
}

//calculo un desplazamiento para el cuadrado dependiendo de la fila 
function calcularDesplazamiento(y){
    let desp=0;
    let modY = y % 4;
    if (modY == 0 || modY==4) {
        desp = -30;
    } else  if (modY == 1 || modY==3){
        desp = -20;
    }else if (modY == 2) {
        desp = -5;
    } 
    
    return desp;
}

function cuadrado(x, y, tam, posActual){
  if(esPar(posActual)){
    if(estadoOriginal){
      fill(255);
    }else{
      fill(135, 206, 235);// celeste
    }
  }else{
    if(estadoOriginal){
      fill(0);
     }else{
      fill(255); //blanco
    }
  }
  rect(x,y,tam,tam);
}

function circulo( x, y, tam, posActual){
   if(esPar(posActual)){
     fill(135, 206, 235);
   }else{
     fill(255);
   }
   ellipse(x,y,tam, tam);
}


function keyPressed(){
  if(estadoOriginal){
      estadoOriginal=false;  
  }else{
    estadoOriginal=true;
  }
}

function mousePressed(){
  if(estadoOriginal){
      estadoOriginal=false;  
  }else{
    estadoOriginal=true;
  }
}
