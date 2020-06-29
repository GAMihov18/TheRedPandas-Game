//Variables
let teamnumber=0;
let turn=0;
let move;
const infoTurn=document.getElementById('info-turnPerson');
const infoTurnAmount=document.getElementById('info-turnAmount')
const dice = document.getElementById('die');
let rollDie = document.getElementById('roll-button').addEventListener('click',rollDice);
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
]
const memory={
  player1:{
    rolledSix:false,
    hasPawnOut:false,
    pawn1:{
      position,
      isOut:false,
      hasBeenOnSpawn:false,
    },
    pawn2:{
      position,
      isOut:false,
      hasBeenOnSpawn:false,
    },
    pawn3:{
      position,
      isOut:false,
      hasBeenOnSpawn:false,
    },
    pawn4:{
      position,
      isOut:false,
      hasBeenOnSpawn:false,
    },
  },
};

areas.forEach(element => {
  element.classList='hidden';
});

//Code


//Functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function checkTeam(teamnumber){
  if (teamnumber===1) {
    areas.forEach(element => {
      element.classList='B-visible';
    });
    infoTurn.innerHTML=`<span style="color: white;">Team Purple's Turn</span>`;
  }
  if (teamnumber===2) {
    areas.forEach(element => {
      element.classList='R-visible';
    });
    infoTurn.innerHTML=`<span style="color: white;">Team Orange's Turn</span>`;
  }
  if (teamnumber===3) {
    areas.forEach(element => {
      element.classList='U-visible';
    });
    infoTurn.innerHTML=`<span style="color: white;">Team Green's Turn</span>`;
  }
  if (teamnumber===4) {
    areas.forEach(element => {
      element.classList='H-visible';
    });
    infoTurn.innerHTML=`<span style="color: white;">Team Blue's Turn</span>`;
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
    checkTeam(teamnumber);
    turn++;
    infoTurnAmount.innerHTML=`Turn: ${turn}`;
}

//Logs 0 if reach here
console.log(0);