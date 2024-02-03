//aw coda lwaya ka window krdawa webaka load bi u pash , aw 
//functionay dathawe awt lo run daka ka webaka load bu
// wata elementy window la7alati load buni aw functiona load run bka
window.addEventListener('load' , init);

let score = 0;
let time = 6;
let isPlaying;

const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.querySelector('#time');
const messageDisplay = document.querySelector('#message');
const wordInput = document.querySelector('#word-input');

const words = [
  "amanj",
  "suburb",
  "method",
  "cover",
  "praise",
  "pace",
  "beard",
  "shadow",
  "boat",
  "weight",
  "gloom",
  "invisible",
  "book",
  "hole",
  "tight",
  "pill",
  "photography",
  "civilization",
  "flight",
  "shiver",
  "teach",
  "cluster",
  "throat",
  "glue",
  "surprise",
  "concrete",
  "council",
  "trouser",
  "survivor",
  "excuse"
  
];

function init(){
showWord();
 setInterval(countDown, 1000);
 // pash away era load nu au functionana run dabe ka callt krdya
 //katak function setInterval run dabe awa aw functiona lanaw kawany
 // nawi aw function u katta danuse ka datawe runbi estka lera
 // countDown har 1s jarak run dabi chunka har chrka jarak time-- dabi
 //wabi dubara kam bbtawa dabi jarakide CountDown runbi tab3an dabi hamu
 // chrka jarakish wabkay chunkaa atu loopt bakar naynaya.

 setInterval(checkStatus, 1000);
 // chrka ba chrka load dabi aw functiona hata ka time==0
 // awja marjaka true bu game over nishan dada.

 wordInput.addEventListener('input' , startGame)
 // wata elemnty wordInput la 7alati input daxilkrdn aw functiona run bka


}

function showWord(){
  let randIndex = Math.floor(Math.random()*words.length);
  currentWord.innerHTML= words[randIndex];

}

function countDown(){
  if(time>0){
    time--;
    timeDisplay.innerHTML=time  
  }else if(time==0){
    isPlaying=false;
  }
  
}

function checkStatus(){
  if(time==0 && isPlaying===false){
    messageDisplay.innerHTML='Game over'
    score = 0;
  }
}

function startGame(){
  if(matchWord()){
    isPlaying=true;
    score++;
    scoreDisplay.innerHTML = score; 
    showWord();
    wordInput.value='';
    time=6;
  }
}

function matchWord(){
  if(wordInput.value===currentWord.innerHTML){
    messageDisplay.innerHTML='Correct'
    return true;
  }else{
    messageDisplay.innerHTML=''
    return false;    
  }
}

