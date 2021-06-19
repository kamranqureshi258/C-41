class Player {
  constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
    this.rank=null;
    this.playerrank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      Name:this.name,
     distance:this.distance,
     playerrank:this.playerrank
    });
  }
  static getplayerInfo(){
    var playerref=database.ref('players')
    playerref.on("value",(data)=>{
      AllPlayers=data.val();
    }
    )

  }
getCarsatEnd(){
  database.ref('CarsatEnd').on('value',(data)=>{
    this.rank=data.val();
  });

} 
  static updateCarsatEnd(rank){
 database.ref('/').update({
   CarsatEnd:rank
 }) 
}
}


