class PlayerMovmentBehavior extends Sup.Behavior {

  public speed=0.01;
  public last_key="down"; 
  update() {
    let x=0, y=0, key=this.last_key;
    
    if(Sup.Input.isKeyDown("LEFT")){
      x= -this.speed;
      key="left";
    }
    if(Sup.Input.isKeyDown("RIGHT")){
      x= this.speed;
      key="right";
    }
    if(Sup.Input.isKeyDown("UP")){
      y= this.speed;
      key="up";
    }
    if(Sup.Input.isKeyDown("DOWN")){
      y= -this.speed;
      key="down";
    }
    
    this.move(x,y,key);
  }
  
  getCollsion(x,y){
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
    this.actor.arcadeBody2D.setVelocity(new Sup.Math.Vector2(x,y));
  }
  
  
  move(x,y,key){
    this.last_key=key;
    if(x!=0 || y!=0){
      this.actor.spriteRenderer.setAnimation("walk-"+key);
      this.getCollsion(x,y);
    }
    else{
      this.actor.spriteRenderer.setAnimation("idle-"+key);
      this.getCollsion(x,y);
    }
  }
}
Sup.registerBehavior(PlayerMovmentBehavior);
