
function inicializar(){
  inicializarImagenes();
  inicializarTextos();
}


function inicializarImagenes(){
  imgs[0] = loadImage("data/tm0.jpeg");
  imgs[1] = loadImage("data/tm1.jpg");
  imgs[2] = loadImage("data/tm2.jpg");
  imgs[3] = loadImage("data/tm3.jpg");
  imgs[4] = loadImage("data/tm4.jpg");
  imgs[5] = loadImage("data/tm5.jpg");
  imgs[6] = loadImage("data/tm6.jpg");
  imgs[7] = loadImage("data/tm7.jpg");
  imgs[8] = loadImage("data/tm8.jpg"); //FINAL
  imgs[9] = loadImage("data/tm9.jpg");
  imgs[10] = loadImage("data/tm10.jpg");
  imgs[11] = loadImage("data/tm11.jpg");
  imgs[12] = loadImage("data/tm12.jpg");
  imgs[13] = loadImage("data/tm13.jpg");
  imgs[14] = loadImage("data/tm14.jpg");
  imgs[15] = loadImage("data/tm15.jpg");
  imgs[16] = loadImage("data/tm16.jpg"); //FINAL
  imgs[17] = loadImage("data/tm17.jpg");
  imgs[18] = loadImage("data/tm18.jpg");
  imgs[19] = loadImage("data/tm19.jpg");
  imgs[20] = loadImage("data/tm20.jpeg"); //FINAL
  imgs[21] = loadImage("data/tm21.jpg"); //CREDITOS
}


function inicializarTextos(){
  textos[0] = "Monster INC, empresa de energia a base de sustos,\n donde Mike y Sulley trabajan.";
  textos[1] = "Mike y Sulley llevan el primer puesto del ranking de\nasustadores y su objetivo es ganar la competencia, \npero Randall (principal competidor) les pisa los talones.";
  textos[2] = "Mike tiene la misión de hacer el papeleo todos los dias, cosa \nque olvida muchas veces. Esto provoca que lo penalicen \npor lo que le dan una última oportunidad.";
  textos[3] = "Termina la jornada laboral y Mike tiene que ir a cenar\na un lugar exclusivo con su novia, pero... ";
  textos[4] = "¿Hizo el papeleo?"; //De acá pasa a la opción 5 (SI) u opción 9 (NO) 
  textos[5] = "Randall captura a Boo y ejecuta su plan, quitandole energia\ny encerrandola para luego recuperada volver a quitarle más."; //Principio opción SI
  textos[6] = "La energia comienza a restablecerse y ser cada vez mayor\na costa de su plan oscuro.";
  textos[7] = "Los empleados son despedidos porque ya no son necesarios, \nincluso Mike y Sulley, llevándolos a investigar por qué \nla energia era mayor sin los gritos.";
  textos[8] = "Se asocian con número 1 de CDA y descubren lo que \nestá haciendo Randall y Waternoose, capturándolos y \ndevolviendo a los niños a su mundo."; //FINAL
  textos[9] = "Sulley ayuda a su amigo y se compromete a hacerlo por él.\nEncuentra la puerta de Boo e investiga lo que pasó."; //Principio opción NO
  textos[10] = "Boo se esconde de Sulley asustandolo. Este, asustado,\nencierra a Boo y la lleva con Milke al restaurant.";
  textos[11] = "En el restaurant escapan de la CDA y deciden ir a su casa\npara esconder a Boo. Se propone resolver al otro día\nel problema.";
  textos[12] = "Cuando llegan a la empresa ven un descontrol provocado\npor la CDA que investiga la aparicion en el mundo de Boo.\nEsto hace pensar a Mike y Sulley, dudando que hacer.";
  textos[13] = "¿Deciden entregar a la niña a la CDA?"; //De acá pasa a la opción 14 (SI) u opción 17 (NO) 
  textos[14] = "La CDA se sorprende de que Mike y Sulley tienen a Boo y \nlos detiente, hasta investigar bien qué pasó y por qué \nestaba con ellos. Además devuelven a Boo a su mundo."; //Principio opción SI
  textos[15] = "Luego de un tiempo de investigación la CDA \nno da con los culpables y tampoco tiene elementos \npara retener a Sulley y Mike, liberándolos.";
  textos[16] = "Mike y Sulley vuelven a Monster Inc pero su gran objetivo, \nganar la competencia se volvió inalcanzable. Randall salió \nganador, pausando su plan ya que la CDA seguía investigando."; //FINAL
  textos[17] = "Intentan devolver a la niña, pero descubren el plan malévolo\nde Randall y buscan a la vez huir de él."; //Principio opción NO
  textos[18] = "Deciden hablar con el Waternoose (el jefe) para que los\nayude y contar el plan de Randall, pero él estaba involucrado y \ncon un engaño, destierra a Mike y Sulley quedandose con Boo.";
  textos[19] = "Mike y Sulley consiguen volver a Metrópolis, salvando a Boo y \nhaciendo que Randall y Waternoose queden \narrestados por la CDA.";
  textos[20] = "Gracias a Boo descubren que la risa es mucha más fuerte\nque los gritos.\nSalvan la compañía y la convierten en una empresa de risas."; //FINAL
  textos[21] = "Mauricio Aguirre Legajo 94025/4 \nAldana del Viso Legajo 119009/1 \nAutor de la obra ¨Monsters Inc.¨: Pete Docter"; //CREDITOS
}


function pintarBoton(texto, x, y, w, h ) {
  push();
  rectMode(CENTER);
  if ( colisionBoton( x, y, w, h ) ) {
    fill (50, 200, 210);
  } else {
    fill(100);
  }
  rect(x, y, w, h, 10);
  textAlign(CENTER, CENTER);
  fill(255);
  text(texto, x, y);
  pop();
}


function colisionBoton( x, y, w, h ) {
  //evalua colision boton Centrado:
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}


function pintarPantalla(pantallaAct){
  image(imgs[pantallaAct], 0, 0, 640, 480);
  noStroke();
  fill(50,50,50,180);
  rect(0,380,640,100);
  textAlign(CENTER);
  fill(255);
  text(textos[pantallaAct],320,415);
}


function pantallaUnBoton(texto, numPantalla){
  push();
  background(255, 0, 0);
  pintarPantalla(numPantalla);
  textAlign(CENTER);
  pintarBoton(texto, width/2, height*0.72, 200, 40);
  pop();
}

function pantallaDosBotones( numPantalla , textoA , textoB ) {
  push();
  background(255, 0, 0);
  fill(255);
  pintarPantalla(numPantalla);

  //botones:
  //A:
  pintarBoton(textoA, width/2-200, height*0.72, 200, 40);
  //B:
  pintarBoton(textoB, width/2+200, height*0.72, 200, 40);
  pop();
}
