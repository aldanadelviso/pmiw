class Inicio {
    constructor(x, y, ruta){
     this.x= x;
     this.y= y;
     this.ruta=ruta;
     this.imagen=null;
     this.comenzar= new Boton(200, 250, 120, 40, "COMENZAR");
     this.creditos= new Boton(450, 250, 120, 40, "CRÉDITOS");
  }
  
  preload(){
    this.imagen= loadImage(this.ruta);
  }
  
  dibujar(){
    if (this.imagen){
      image(this.imagen, this.x, this.y);
      this.comenzar.dibujar();
      this.creditos.dibujar();
    }  
  }

}
