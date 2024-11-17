//Aldana del Viso
//Mauricio Aguirre
//tpfinalparte2 - comision 3
//Video: https://youtu.be/5BM12JWOMI0

let juego;
let inicio;
let creditos;
let instrucciones;
let textoCreditos="Este juego fue creado por \nMauricio Aguirre Legajo 94025/4 \nAldana del Viso Legajo 119009/1 \n";
let textoInstrucciones="Objetivo del juego:\nEl jugador debe eliminar a los tres tipos de monstruos lanzándoles una media.\n Si logra acertar a los tres, ¡gana! Pero si falla tres veces, pierde.\n"+
"Cómo jugar:\n-Haz click en el mouse para lanzar la media hacia los monstruos."+
"\n-Apunta y lanza la media para impactar a los monstruos.\n Cada tipo de monstruo eliminado no volverá a aparecer.\n"+
"-Si lanzas la media y no golpeas a ningún monstruo, sumarás un fallo.\n Al acumular 3 fallos, el juego termina.\n"+
"-Acierta a los tres tipos de monstruos para completar el desafío y ganar la partida.";
let pantallaActual="inicio";
let cancion;

function preload() {
  juego = new Juego();
  inicio = new Inicio(0, 0, "data/inicio.jpeg");
  creditos = new PantallaInfo(0,0,"data/inicio.jpeg", "INICIO", textoCreditos, 28);
  instrucciones = new PantallaInfo(0,0,"data/inicio.jpeg", "JUGAR", textoInstrucciones, 15);
  juego.preload();
  inicio.preload();
  creditos.preload();
  instrucciones.preload();
}

function setup(){
  createCanvas(640, 480);
  cancion = document.getElementById("cancion");
}


function draw() {
   background(255);
   if(juego.iniciado){
     cancion.play();
     juego.dibujar();
   }else{
     cancion.pause();
     cancion.currentTime=0;
     if(pantallaActual=="inicio"){
        inicio.dibujar();
        if(inicio.creditos.detectar()){
          pantallaActual="creditos";
        }
        if(inicio.comenzar.detectar()){
          pantallaActual="instrucciones";
        }
     }else if(pantallaActual=="creditos"){
         creditos.dibujar();
         if(creditos.boton.detectar()){
           pantallaActual="inicio";
         }
     } else if(pantallaActual=="instrucciones"){
         instrucciones.dibujar();
         if(instrucciones.boton.detectar()){
           pantallaActual="inicio";
           juego.iniciado=true;
         }
     }
   }
   
}


function mousePressed(){
  if(juego.iniciado){
    juego.dispararMedia();
  }
}
