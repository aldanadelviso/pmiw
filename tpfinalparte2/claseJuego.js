class Juego {

  constructor(){
       this.iniciado=false;
       this.resultado="";
       this.fondo = new Fondo(0, 0, "data/fondo.jpg");
       this.puerta = new Puerta(0, 200, "data/puerta.png", 100,200);
       this.media = new Media(70, 250, "data/media.png", 80, 80);
       this.ganador = new Resultado(0, 0, "data/ganador.jpeg");
       this.perdedor = new Resultado(0, 0, "data/perdedor.jpeg");
       this.monstruosObtenidos=0;
       this.monstruos=[];
       let x= 400;
       for (let i=0; i<3; i++){
          this.monstruos[i]= new Monstruo (x,i*60, 50, "data/monstruo"+i+".png", 80,80);
          x+=70;
       }
       this.conteoMonstruos=[];
       this.conteoMedias=[];
       let desplazamiento=0;
       for (let i=0; i<3; i++){
         this.conteoMonstruos[i]= new Punto(0+desplazamiento, 10, "data/monstruo"+i+".png", "data/monstruo"+i+"-tachado.png",50,50);
         this.conteoMedias[i]= new Punto (0+desplazamiento, 60, "data/media.png", "data/media-tachada.png",50,50);
         desplazamiento+=60;
       }
  }
  
  preload(){
     this.fondo.preload();
     this.puerta.preload();
     this.media.preload();
     this.ganador.preload();
     this.perdedor.preload();
     for (let i=0; i<this.monstruos.length; i++){
       this.monstruos[i].preload();
     }
     for (let i=0; i<this.conteoMonstruos.length; i++){
       this.conteoMonstruos[i].preload();
     }
     for (let i=0; i<this.conteoMedias.length; i++){
       this.conteoMedias[i].preload();
     }
  }
  dibujar(){
    if(this.resultado==""){
        this.fondo.dibujar();
        this.media.actualizar();
        this.puerta.dibujar();
        for (let i=0; i<this.conteoMonstruos.length; i++){
           this.conteoMonstruos[i].dibujar();
        }
        for (let i=0; i<this.conteoMedias.length; i++){
           this.conteoMedias[i].dibujar();
        }
        for (let i=0; i<this.monstruos.length; i++) {
          this.monstruos[i].mover();
          this.monstruos[i].dibujar();
        }
        this.colision();
        for (let i=0; i<this.media.errado; i++) {
          this.conteoMedias[i].marcar();
        }
        if(this.media.errado == 3){
            this.perder();
        }
    }else{
        if(this.resultado=="ganador"){
          this.ganador.dibujar();
          if(this.ganador.reiniciar.detectar()){
            this.reiniciarValores();
          }
        }
        if(this.resultado=="perdedor"){
          this.perdedor.dibujar();
          if(this.ganador.reiniciar.detectar()){
            this.reiniciarValores();
          }
        }
    }
  }
  
  dispararMedia(){
      this.media.disparar();
  }
  
  colision() {
    for (let i=0; i<this.monstruos.length; i++) {
      let distan = dist(this.media.x, this.media.y, this.monstruos[i].x, this.monstruos[i].y);
      if (distan < this.monstruos[i].d/2) {
        this.media.colision();
        this.monstruos[i].ocultar();
        this.conteoMonstruos[i].marcar();
        this.monstruosObtenidos+=1;
        if(this.monstruosObtenidos == 3){
           this.ganar();
        }
      }
    }
  }
  
  ganar(){
    this.resultado="ganador";
  }
  
  perder(){
    this.resultado="perdedor";
  }
  
  reiniciarValores(){
    this.iniciado=false;
    this.resultado="";
    this.monstruosObtenidos=0;
    let x= 400;
    for (let i=0; i<3; i++){
        this.monstruos[i].reiniciar(x, i*60);
        x+=70;
        this.conteoMonstruos[i].reiniciar();
        this.conteoMedias[i].reiniciar();
    }
    this.media.reiniciar();
  }
}
