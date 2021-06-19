class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();

    }
    car1=createSprite(100,200);
    car1.addImage(car1img)

    car2=createSprite(300,200);
    car2.addImage(car2img)

    car3=createSprite(500,200);
    car3.addImage(car3img)

    car4=createSprite(700,200);
    car4.addImage(car4img)

    cars=[car1,car2,car3,car4];
  }
  play(){

    form.hide();
    text("Game Start",120,100);
    Player.getplayerInfo();
    player.getCarsatEnd();
    console.log(AllPlayers)
    if(AllPlayers!==undefined){
      background(ground);
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var X=400;
      var y;
      var index=0;
      for(var p in AllPlayers){
   
  
    y=displayHeight-AllPlayers[p].distance;
    
       cars[index].x=X
       cars[index].y=y
      
       if(index+1===player.index){
       camera.position.x=displayWidth/2;
       camera.position.y=cars[index].y;
        fill("red")
        stroke("black")
       ellipse(X,y,60,60)  
    }
        X=X+200;
        index=index+1
      
      }

    }
    if(keyDown("UP")&&player.index!==null){
      player.distance+=50;
      player.update();
    }
    if(player.distance>3800){
      gameState=2;
      player.rank +=1
      Player.updateCarsatEnd(player.rank);
      console.log("Game Ended");
      player.playerrank=player.rank;
      player.update()
    }
    drawSprites();

  }
  End(){
    console.log(player.rank)
  var rank=createElement('h2');
  rank.html('Your Rank IS...'+player.rank);
  rank.position(displayWidth/2,displayHeight/4)

  }
  Leaderboard(){
    for(var p in AllPlayers){
      clear();
      var y=200
      var rank=createElement('h2');
  rank.html(AllPlayers[p].Name+':'+AllPlayers[p].playerrank);
  rank.position(200,y)
      y=y+100
    }
  }
}

