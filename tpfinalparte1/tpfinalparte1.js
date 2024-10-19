//Aldana del Viso
//Mauricio Aguirre
//tpfinalparte1 - comision 3
//Video: https://youtu.be/5gHzS98p7Mo



let pantallaAct = 0;
let imgs = [];
let textos = [];
let opcionA = "SI";
let opcionB = "NO";
let textoComenzar= "COMENZAR";
let textoVolver= "VOLVER A INICIO";
let textoCreditos= "CRÉDITOS";
let audioElemento;


function preload() {
  inicializar();
}

function setup() {
  createCanvas(640, 480);
  textSize(22);
  audioElemento = document.getElementById("miAudio");

}


function draw() {
  background(0);
  if (pantallaAct === 0) {// Pantalla inicial de la historia
    pantallaUnBoton(textoComenzar, pantallaAct); 
  } else if ( pantallaAct === 21) { 
    pantallaUnBoton(textoVolver, pantallaAct);
  } else if ( pantallaAct === 4 || pantallaAct===13) {
    pantallaDosBotones(pantallaAct, opcionA, opcionB);
  } else if (pantallaAct === 8 || pantallaAct===16 || pantallaAct===20){
    pantallaDosBotones(pantallaAct, textoVolver, textoCreditos); 
  } else {
    pintarPantalla(pantallaAct); 
  }
}

function mousePressed() {
  if (pantallaAct === 0) { //PANTALLA INICIAL
    if (colisionBoton(width/2, height*0.72, 200, 40) ) { 
      pantallaAct=1;
    }
  } else if (pantallaAct === 4){ // FLUJO OPCIONES FINAL 1
    if ( colisionBoton(width/2-200, height*0.72, 200, 40) ) { 
      pantallaAct=5;
    } else if ( colisionBoton(width/2+200, height*0.72, 200, 40) ) {
      pantallaAct=9;
    }
  }
    else if (pantallaAct===13){ // FLUJO OPCIONES FINAL 2
    if ( colisionBoton(width/2-200, height*0.72, 200, 40) ) { 
      pantallaAct=14;
    } else if ( colisionBoton(width/2+200, height*0.72, 200, 40) ) { 
      pantallaAct=17;
    }
  } else if (pantallaAct === 8 || pantallaAct===16 || pantallaAct===20){ // FINALES
    if (colisionBoton(width/2-200, height*0.72, 200, 40) ) { 
      pantallaAct=0;
    } else if (colisionBoton(width/2+200, height*0.72, 200, 40) ) { 
      pantallaAct=21;
    }
  } else if (pantallaAct === 21){ // PANTALLA CREDITOS
    if (colisionBoton(width/2, height*0.72, 200, 40) ) { 
      pantallaAct=0;
    }
  } else{
    pantallaAct++; //Ante cada click si no se cumple lo anterior, avanza de pantalla
  }
  if (pantallaAct == 1) {
    audioElemento.currentTime=0;
    audioElemento.play();
  } else if (pantallaAct == 21 || pantallaAct == 0) {
    audioElemento.pause();
  }
}
