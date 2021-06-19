class Form {
  constructor() {
    this.reset= createButton("Reset")
    this.title = createElement('h2')

    this.input = createInput("Name");
    this.button = createButton('Play');

    this.greeting = createElement('h3');
  }
hide(){
  this.input.hide();
  this.greeting.hide();
  this.button.hide();
}
  display(){
    this.reset.position(50,50)
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50,0);
    
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.button.mousePressed(()=>{
     this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      textSize(30)
      fill("black")
      text("Waiting For Other Players....",displayWidth/2-70,displayHeight/4+100)
      this.greeting.position(displayWidth/2-70,displayHeight/4)
    });
    this.reset.mousePressed(()=>{
      game.update(0);
      Player.updateCarsatEnd(0);
      player.updateCount(0);
    })

  }
}
