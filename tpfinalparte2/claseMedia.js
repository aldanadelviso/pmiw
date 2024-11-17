class Media {

  constructor(x, y, ruta, ancho, alto){
     this.x= x;
     this.y= y;
     this.ruta=ruta;
     this.imagen=null;
     this.ancho=ancho;
     this.alto=alto;
     this.disparada=false;
     this.errado=0;
  }
  
  preload(){
    this.imagen= loadImage(this.ruta);
  }
  
  actualizar(){
    this.disparado();
    this.dibujar();
  }
  
  disparado() {
    if (this.disparada===true){
      this.x+=8;
      if (this.x>width) {
        this.x = 70;
        this.disparada=false;
        this.errado+=1;
      }
    }
  }
  
  disparar(){
    this.disparada = true;
  }
  
  dibujar(){
    if (this.imagen){
      image(this.imagen, this.x, this.y, this.ancho, this.alto);
    }  
  }
  
  colision(){
    this.disparada=false;
    this.x=70;
    this.dibujar();
  }
  
  reiniciar(){
     this.disparada=false;
     this.errado=0;
     this.x=70;
  }

}
