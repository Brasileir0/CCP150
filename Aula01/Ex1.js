class VideoGame{
  constructor(marca, nControles,tipoMidia) {
    this._marca = marca;
    this._nControles = nControles;
    this._tipoMidia = tipoMidia;  
    this.ligado = false;
    this.jogando = false;
    this.salvarJogo = false;
  }
  
  get marca() {
    return this._marca;
  }
  
  get nControles(){
    return this._nControles
  }
  
  get tipoMidia(){
    return this._tipoMidia
  }
  
  set Marca(marca){
    this._marca = marca;
  }
  
  set nControles(nControles){
    this._nControles = nControles;
  }
  
  set tipoMidia(tipoMidia){
    this._tipoMidia = tipoMidia;
  }

  ligar(estado){
    if(estado === true) {
      this.ligado = true;
    } else if (estado === false) {
      this.ligado = false;
    } else {
      console.log("Estado Inválido. Use \"true\" para ligar e \"false\" para desligar");
    }
  }

  jogar(){
    if(this.ligado){
      this.jogando = true;
      console.log("O " + this._marca + " está sendo jogado!");
    } else {
      console.log("O " + this._marca + " não está sendo jogado!");
    }
  }
  
  salvarJogo(){
    if(this.jogando) {
      jogoSalvo = true;
      console.log("Jogo Salvo!");
    } else {
      console.log("O " + this._marca + " não está sendo jogado no momento!");
    }
  }
}

var playStation = new VideoGame("Sony", 2, "Blu-ray");
console.log(playStation);