class Puerta {

  constructor(x, y, ruta, ancho, alto){
     this.x= x;
     this.y= y;
     this.ruta=ruta;
     this.imagen=null;
     this.ancho=ancho;
     this.alto=alto;
  }
  
  preload(){
    this.imagen= loadImage(this.ruta);
  }
  
  dibujar(){
    if (this.imagen){
      image(this.imagen, this.x, this.y, this.ancho, this.alto);
    }  
  }
}
