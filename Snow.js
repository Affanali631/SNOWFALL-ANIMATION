class Snow{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Image=loadImage("snow4.webp");
        }
      display(){
        var pos= this.body.position;
        
      
      
        imageMode(CENTER);
        image(this.Image,pos.x,pos.y,this.width, this.height);
     
    
  }
  }