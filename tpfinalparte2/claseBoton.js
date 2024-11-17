class Boton {
   constructor(x, y, ancho, alto, texto){
     this.x= x;
     this.y= y;
     this.ancho=ancho;
     this.alto=alto;
     this.texto=texto;
     this.colorReposo = color(65,111,160);
     this.colorOver = color(50, 200, 210);
  }
  
  dibujar () {
    push();
    translate(this.x, this.y);
    if (this.colisionMouse() ) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }
    rectMode(CENTER);
    rect(0, 0, this.ancho, this.alto, 5);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(this.texto, 0, 0);
    pop();
  }

  colisionMouse() {
    if (mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
  
  detectar() {
     if(mouseIsPressed && mouseX<this.x + this.ancho && mouseX>this.x-this.ancho && mouseY >this.y-this.alto && mouseY < this.y+this.alto){
       return true
    }
  }
}
