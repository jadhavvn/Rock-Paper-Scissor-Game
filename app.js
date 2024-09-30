let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
  
const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"];
    let compChoice = Math.floor(Math.random()*3);
    return options[compChoice];
}


const drawGame = ()=>{
    msg.innerText = "Game was draw, Play Again.";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin === true)
    {
        userScore++;
        userScorePara.innerText = userScore;   
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore; 
        msg.innerText = `You lost. ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>{
    
    // random no. generate for computer
    const compChoice = genCompChoice();
   
    //Same choice shoud stop 
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //Computer choice : paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper")
        {
            //Computer choice : rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }else{
            //Computer choice : paper, rock
            userWin = compChoice === "rock" ? false : true;
        } 
        showWinner(userWin, userChoice, compChoice);  
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        // console.log("Choice was clicked", userChoice)
        playGame(userChoice);
    })
})
