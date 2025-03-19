const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let randomChoice = document.getElementById("random-choice");
const winBox = document.getElementById("win-box");

//choose at random
let choiceNo = Math.floor(Math.random()*3);
const choices = [
    {id:1, value:"Rock"},
    {id:2, value:"Paper"},
    {id:3, value:"Scissors"}
]


// check what user has chosen
rock.addEventListener("click", ()=>{
    console.log("Rock chosen")
    randomChoice.innerHTML = choices[choiceNo].value;
    if(choiceNo === 0){
        winBox.innerHTML = "Its a tie";
    }else if(choiceNo === 1){
        winBox.innerHTML = "You loose 😢";
    }else{
        winBox.innerHTML = "You won! 🥳"
    }
})
paper.addEventListener("click", ()=>{
    console.log("paper chosen")
})
scissors.addEventListener("click", ()=>{
    console.log("scissors chosen")
})
