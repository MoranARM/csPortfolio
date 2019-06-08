class Pinky extends Ghost{//Pink Ghost
  constructor(pac){
    super(pac);
    this.rgb = color(234, 130, 229);
    this.scatx = 1;
    this.scaty = 1;
    this.pink = true;
    this.active = pinkyActive;
  }
  
}
