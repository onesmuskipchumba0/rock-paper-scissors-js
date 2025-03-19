const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let randomChoice = document.getElementById("random-choice");
const winBox = document.getElementById("win-box");

//choose at random

const choices = [
    {id:1, value:"Rock 🪨"},
    {id:2, value:"Paper 📃"},
    {id:3, value:"Scissors ✂️"}
]


// check what user has chosen
rock.addEventListener("click", ()=>{
    let choiceNo = Math.floor(Math.random()*3);
    if(choiceNo === 0){
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "Its a tie";
    }else if(choiceNo === 1){
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "You loose 😢";
    }else{
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "You won! 🥳"
    }
})
paper.addEventListener("click", ()=>{
    let choiceNo = Math.floor(Math.random()*3);
    if(choiceNo === 1){
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "Its a tie";
    }else if(choiceNo === 2){
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "You loose 😢";
    }else{
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "You won! 🥳"
    }
})
scissors.addEventListener("click", ()=>{
    let choiceNo = Math.floor(Math.random()*3);
    if(choiceNo === 2){
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "Its a tie";
    }else if(choiceNo === 0){
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "You loose 😢";
    }else{
        randomChoice.innerHTML = choices[choiceNo].value;
        winBox.innerHTML = "You won! 🥳"
    }
})
