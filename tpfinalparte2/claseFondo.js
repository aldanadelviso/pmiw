class Fondo {

  constructor(x, y, ruta){
     this.x= x;
     this.y= y;
     this.ruta=ruta;
     this.imagen=null;
  }
  
  preload(){
    this.imagen= loadImage(this.ruta);
  }
  
  dibujar(){
    if (this.imagen){
      image(this.imagen, this.x, this.y);
    }  
  }
}
