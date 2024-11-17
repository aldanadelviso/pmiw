class Monstruo {
  
  constructor(x, y, d, ruta, ancho, alto){
     this.x= x;
     this.y= y;
     this.d=d;
     this.ruta=ruta;
     this.imagen=null;
     this.velocidad= random(3,5);
     this.ancho=ancho;
     this.alto=alto;
     this.visible=true;
  }
  
  preload(){
    this.imagen= loadImage(this.ruta);
  }
  
  mover() {
    if(this.visible){
      if (this.y > height+this.d) {
        this.reset();
      }
      this.y += this.velocidad;
    }  
  }
  
  dibujar(){
    if(this.visible){
      image(this.imagen, this.x, this.y, this.ancho, this.alto);
    }
  }
  
  reset(){
    this.y = -this.d;
  }
  
  ocultar(){
    this.visible=false;
    this.x=0;
    this.y=0;
  }
  
  reiniciar(x,y){
    this.visible=true;
    this.x=x;
    this.y=y;
  }

}
