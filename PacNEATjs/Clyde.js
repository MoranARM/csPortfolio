class Clyde extends Ghost{//Orange Ghost
  constructor(pac){
    super(pac);
    this.rgb = color(255, 100, 0);
    this.scatx = 1;
    this.scaty = 29;
    this.clyd = true;
    this.active = clydeActive;
  }
}
