console.log("Hello World!");
function getComputerChoice(){
/* Choose randomly between Rock Paper or Scissors*/
 let answer = (Math.floor(Math.random() * 3 + 1));

 /* randomly generate a number between 1 2 or 3*/
 if(answer === 1){
    
    return "Rock";}
else if(answer === 2){
    return "Paper";
}
else{
    return "Scissors";
}
 }
