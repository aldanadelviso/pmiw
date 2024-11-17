class Punto {

    constructor(x, y, rutaOK, rutaFallo, ancho, alto){
     this.x= x;
     this.y= y;
     this.rutaOK=rutaOK;
     this.rutaFallo=rutaFallo;
     this.mostrarOriginal=true;
     this.imagenOK=null;
     this.imagenFallo=null;
     this.ancho= ancho;
     this.alto=alto;
  }
  
  preload(){
    this.imagenOK= loadImage(this.rutaOK);
    this.imagenFallo= loadImage(this.rutaFallo);
  }
  
  inicializar(){
    this.mostrarOriginal=true;
  }
  
  dibujar (){
     if(this.mostrarOriginal){
       if (this.imagenOK){
          image(this.imagenOK, this.x, this.y, this.ancho, this.alto);
       }
    }else{
      if (this.imagenFallo){
        image(this.imagenFallo, this.x, this.y, this.ancho, this.alto);
      }
    } 
  }
  
  marcar(){
    this.mostrarOriginal=false;
  }
  
  reiniciar(){
    this.mostrarOriginal=true;
  }
  
}
