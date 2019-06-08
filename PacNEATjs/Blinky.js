class Blinky extends Ghost{//Red Ghost
  constructor(pac){
    super(pac);
    this.rgb = color(255, 0, 0);
    this.scatx = 26;
    this.scaty = 1;
    this.active = blinkyActive;
  }
}
