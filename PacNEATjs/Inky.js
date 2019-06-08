class Inky extends Ghost{//Blue Ghost
  constructor(pac){
    super(pac);
    this.rgb = color(70, 191, 238);
    this.scatx = 26;
    this.scaty = 29;
    this.ink = true;
    this.active = inkyActive;
  }
  
}
