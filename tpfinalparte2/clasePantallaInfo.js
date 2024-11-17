class PantallaInfo {
    constructor(x, y, ruta, textoBoton, textoInfo, tamanioTexto){
     this.x= x;
     this.y= y;
     this.ruta=ruta;
     this.imagen=null;
     this.boton= new Boton(330, 430, 100,40, textoBoton);
     this.textoInfo= textoInfo;
     this.tamanioTexto=tamanioTexto;
  }
  
  preload(){
    this.imagen= loadImage(this.ruta);
  }
  
  dibujar(){
    if (this.imagen){
      image(this.imagen, this.x, this.y, 640, 480);
      textSize(this.tamanioTexto);
      textAlign(CENTER);
      fill(255);
      text(this.textoInfo, 320, 220);
      this.boton.dibujar();
    }  
  }

}
