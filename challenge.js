// Good Luck! You got this 💪🏾
// Write your code here.

function PlayGame(player1, player2){
    if (player1 === "rock" && player2 === "scissors"){
        return "Player1 wins";
    }
    else if (player1 === "rock" && player2 === "paper"){
        return "Player2 wins";
    } 
    else if (player1 === "scissors" && player2 === "paper"){
        return "Player1 wins";
    }
    else if (player1 === "paper" && player2 === "scissors"){
        return "Player2 wins";
    }
    else if (player1 === "scissors" && player2 === "scissors"){
        return "tie";
    }
    else if (player1 === "rock" && player2 === "rock"){
        return "tie";
    }
    else if (player1 === "paper" && player2 === "paper"){
        return "tie";
    }
    else {
        return "Invalid"
    }
    
}
console.log(PlayGame("rock", "paper"))
console.log(PlayGame("rock", "scissors"))
console.log(PlayGame("scissors", "scissors"))
console.log(PlayGame("rock", "rock"))
console.log(PlayGame("paper", "scissors"))
