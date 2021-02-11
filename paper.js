class paper{

constructor(x,y,r){
  var  options={
   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:0.5
  }
  
  
this.body=Bodies.circle(x,y,r,options)
this.r=r;
this.image = loadImage("paper.png")
World.add(world, this.body);

}
display(){

var pospaper=this.body.position;
push()
translate(pospaper.x,pospaper.y);
imageMode(CENTER);
image(this.image,0,0,this.r);
pop()
}



}