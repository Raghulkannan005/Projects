playerchoice="rock"
computerchoice="paper" // decisior tree//
if(playerchoice===computerchoice){
    console.log("Game Draw!");
}
else if(playerchoice==="paper"){
    if(computerchoice==="scissor"){
        console.log("Computer Wins!");
    }
    else{
        console.log("Player Wins!");
    }
}
else if(playerchoice==="rock"){
    if(computerchoice==="paper"){
        console.log("Computer Wins!");
    }
    else{
        console.log("Player Wins!");
    }
}
else if(playerchoice==="scissor"){
    if(computerchoice==="rock"){
        console.log("Computer Wins!");
    }
    else{
        console.log("Player Wins!");
    }
}
