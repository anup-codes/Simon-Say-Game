let gameSeq=[];
let userSeq=[];

let started = false;
let value =0;

document.addEventListener("keypress", function() {
  if (started == false){
    console.log("game is started");
    started = true;
  }
})