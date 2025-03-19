const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const randomChoice = document.getElementById("random-choice");
const winBox = document.getElementById("win-box");

// check what user has chossen
rock.addEventListener("click", ()=>{
    console.log("Rock chosen")
})
paper.addEventListener("click", ()=>{
    console.log("paper chosen")
})
scissors.addEventListener("click", ()=>{
    console.log("scissors chosen")
})
