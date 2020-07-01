//Variables
let teamnumber=0;
let turn=0;
let move;
const infoTurn=document.getElementById('info-turnPerson');
const infoTurnAmount=document.getElementById('info-turnAmount');
const dice = document.getElementById('die');
let rollDie = document.getElementById('roll-button').addEventListener('click',rollDice);
let resetGameButton= document.getElementById('reset-button').addEventListener('click',resetGame);
const areas=[
  area1= document.getElementById('area1'),
  area2= document.getElementById('area2'),
  area3= document.getElementById('area3'),
  area4= document.getElementById('area4'),
  area5= document.getElementById('area5'),
  area6= document.getElementById('area6'),
  area7= document.getElementById('area7'),
  area8= document.getElementById('area8'),
  area9= document.getElementById('area9'),
  area10= document.getElementById('area10'),
  area11= document.getElementById('area11'),
  area12= document.getElementById('area12'),
  area13= document.getElementById('area13'),
  area14= document.getElementById('area14'),
  area15= document.getElementById('area15'),
  area16= document.getElementById('area16'),
  area17= document.getElementById('area17'),
  area18= document.getElementById('area18'),
  area19= document.getElementById('area19'),
  area20= document.getElementById('area20'),
  area21= document.getElementById('area21'),
  area22= document.getElementById('area22'),
  area23= document.getElementById('area23'),
  area24= document.getElementById('area24'),
  area25= document.getElementById('area25'),
  area26= document.getElementById('area26'),
  area27= document.getElementById('area27'),
  area28= document.getElementById('area28'),
  area29= document.getElementById('area29'),
  area30= document.getElementById('area30'),
  area31= document.getElementById('area31'),
  area32= document.getElementById('area32'),
  area33= document.getElementById('area33'),
  area34= document.getElementById('area34'),
  area35= document.getElementById('area35'),
  area36= document.getElementById('area36'),
];
const memory={
  player1:{
    rolledSix:false,
    hasPawnOut:false,
    pawn1:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area1')
    },
    pawn2:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area2')
    },
    pawn3:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area3')
    },
    pawn4:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area4')
    },
  },
  player2:{
    rolledSix:false,
    hasPawnOut:false,
    pawn1:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area5')
    },
    pawn2:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area6')
    },
    pawn3:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area7')
    },
    pawn4:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area8')
    },
  },
  player3:{
    rolledSix:false,
    hasPawnOut:false,
    pawn1:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area9')
    },
    pawn2:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area10')
    },
    pawn3:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area11')
    },
    pawn4:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area12')
    },
  },
  player4:{
    rolledSix:false,
    hasPawnOut:false,
    pawn1:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area13')
    },
    pawn2:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area14')
    },
    pawn3:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area15')
    },
    pawn4:{
      position:0,
      isOut:false,
      hasBeenOnSpawn:false,
      pawnSpawnPoint: document.getElementById('spawn-area16')
    },
  },
};

console.log(memory);

//Code
hideLoaded();
loadSpawnPoints();


//Functions
function hideLoaded(){
  areas.forEach(element =>{
    element.classList='hidden';
  })
}
//Random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//check which team is something
function checkTeam(teamnumber, roll){
  if (teamnumber===1) {
    infoTurn.innerHTML=`<span style="color: white;">Belle's Turn</span>`;
    player=memory.player1;
    console.log(player);
    movePawns(roll, player,teamnumber);
  }
  else if (teamnumber===2) {
    infoTurn.innerHTML=`<span style="color: white;">Robert's Turn</span>`;
    player=memory.player2;
    console.log(player);
    movePawns(roll, player,teamnumber);
  }
  else if (teamnumber===3) {
    infoTurn.innerHTML=`<span style="color: white;">Ursule's Turn</span>`;
    player=memory.player3;
    console.log(player);
    movePawns(roll, player,teamnumber);
  }
  else if (teamnumber===4) {
    infoTurn.innerHTML=`<span style="color: white;">Harry's Turn</span>`;
    player=memory.player4;
    console.log(player);
    movePawns(roll, player,teamnumber);
  }

}
function rollDice() {
    let rand = randomNumber(1,6);
    if (rand===1) {
      dice.classList='one-visible';
    }
    else if (rand===2) {
      dice.classList='two-visible';
    }
    else if (rand===3) {
      dice.classList='three-visible';
    }
    else if (rand===4) {
      dice.classList='four-visible';
    }
    else if (rand===5) {
      dice.classList='five-visible';
    }
    else if (rand===6) {
      dice.classList='six-visible';
    }
    teamnumber++
    if (teamnumber==5) {
      teamnumber=1;
    }
    checkPerfectRole(rand,teamnumber);
    checkTeam(teamnumber, rand);
    turn++;
    infoTurnAmount.innerHTML=`Turn: ${turn}`;
    
}
function loadSpawnPoints(){
  memory.player1.pawn1.pawnSpawnPoint.classList='B-visible';
  memory.player1.pawn2.pawnSpawnPoint.classList='B-visible';
  memory.player1.pawn3.pawnSpawnPoint.classList='B-visible';
  memory.player1.pawn4.pawnSpawnPoint.classList='B-visible';
  memory.player2.pawn1.pawnSpawnPoint.classList='R-visible';
  memory.player2.pawn2.pawnSpawnPoint.classList='R-visible';
  memory.player2.pawn3.pawnSpawnPoint.classList='R-visible';
  memory.player2.pawn4.pawnSpawnPoint.classList='R-visible';
  memory.player3.pawn1.pawnSpawnPoint.classList='U-visible';
  memory.player3.pawn2.pawnSpawnPoint.classList='U-visible';
  memory.player3.pawn3.pawnSpawnPoint.classList='U-visible';
  memory.player3.pawn4.pawnSpawnPoint.classList='U-visible';
  memory.player4.pawn1.pawnSpawnPoint.classList='H-visible';
  memory.player4.pawn2.pawnSpawnPoint.classList='H-visible';
  memory.player4.pawn3.pawnSpawnPoint.classList='H-visible';
  memory.player4.pawn4.pawnSpawnPoint.classList='H-visible';
}
function resetGame(){
  hideLoaded();
  loadSpawnPoints();
  turn=0;
  teamnumber=0;
  infoTurnAmount.innerHTML='';
  infoTurn.innerHTML='';
}
function movePawns(rollnumber,team, rawteamnumber) {
  if (rawteamnumber===1) {
    if (team.pawn1.isOut===true) {
      areas[team.pawn1.position-1].classList=`B-visible`;
    }
    team.pawn1.position+=rollnumber;
  }
  if (rawteamnumber===2) {
    if (team.pawn1.isOut===true) {
      areas[team.pawn1.position-1].classList=`R-visible`;
    }
    team.pawn1.position+=rollnumber;
  }
  if (rawteamnumber===3) {
    if (team.pawn1.isOut===true) {
      areas[team.pawn1.position-1].classList=`U-visible`;
    }
        newposition = team.pawn1.position+=rollnumber;

    if (team.pawn1.position>36) {
      team.pawn1.position = newposition-team.pawn1.position;
    }
  }
  if (rawteamnumber===4) {
    if (team.pawn1.isOut===true) {
      areas[team.pawn1.position-1].classList=`H-visible`;
    }
    newposition = team.pawn1.position+=rollnumber;

    if (team.pawn1.position>36) {
      team.pawn1.position = newposition-team.pawn1.position;
    }
  }
}
function checkPerfectRole(rollNumber,team) {
  if(rollNumber===6){
    if (team==1) {
      if (memory.player1.pawn1.isOut==false) {
        memory.player1.pawn1.isOut=true;
        memory.player1.pawn1.position=1;
      }
      else if (memory.player1.pawn2.isOut==false) {
        memory.player1.pawn2.isOut=true;
        memory.player1.pawn2.position=1;
      }
      else if (memory.player1.pawn3.isOut==false) {
        memory.player1.pawn3.isOut=true;
        memory.player1.pawn3.position=1;
      }
      else if (memory.player1.pawn4.isOut==false) {
        memory.player1.pawn4.isOut=true;
        memory.player1.pawn4.position=1;
      }
    }
    if (team==2) {
      if (memory.player2.pawn1.isOut==false) {
        memory.player2.pawn1.isOut=true;
        memory.player2.pawn1.position=28;

      }
      else if (memory.player2.pawn2.isOut==false) {
        memory.player2.pawn2.isOut=true;
        memory.player2.pawn2.position=28;
      }
      else if (memory.player2.pawn3.isOut==false) {
        memory.player2.pawn3.isOut=true;
        memory.player2.pawn3.position=28;
      }
      else if (memory.player1.pawn4.isOut==false) {
        memory.player2.pawn4.isOut=true;
        memory.player2.pawn4.position=28;
      }
    }
    if (team==3) {
      if (memory.player3.pawn1.isOut==false) {
        memory.player3.pawn1.isOut=true;
        memory.player3.pawn1.position=19;
      }
      else if (memory.player3.pawn2.isOut==false) {
        memory.player3.pawn2.isOut=true;
        memory.player3.pawn2.position=19;
      }
      else if (memory.player3.pawn3.isOut==false) {
        memory.player3.pawn3.isOut=true;
        memory.player3.pawn3.position=19;
      }
      else if (memory.player3.pawn4.isOut==false) {
        memory.player3.pawn4.isOut=true;
        memory.player3.pawn4.position=19;
      }
    }
    if (team==4) {
      if (memory.player4.pawn1.isOut==false) {
        memory.player4.pawn1.isOut=true;
        memory.player4.pawn1.position=10;
      }
      else if (memory.player4.pawn2.isOut==false) {
        memory.player4.pawn2.isOut=true;
        memory.player4.pawn2.position=10;
      }
      else if (memory.player4.pawn3.isOut==false) {
        memory.player4.pawn3.isOut=true;
        memory.player4.pawn3.position=10;
      }
      else if (memory.player1.pawn4.isOut==false) {
        memory.player4.pawn4.isOut=true;
        memory.player4.pawn4.position=10;
      }
    }
  }
}
//Logs 0 if reach here
console.log(0);