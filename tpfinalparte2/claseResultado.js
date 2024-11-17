class Resultado {
    constructor(x, y, ruta){
     this.x= x;
     this.y= y;
     this.ruta=ruta;
     this.imagen=null;
     this.reiniciar= new Boton(330, 180, 100,40, "REINICIAR");
  }
  
  preload(){
    this.imagen= loadImage(this.ruta);
  }
  
  dibujar(){
    if (this.imagen){
      image(this.imagen, this.x, this.y, 640, 480);
      this.reiniciar.dibujar();
    }  
  }

}
