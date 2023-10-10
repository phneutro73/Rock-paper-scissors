const things = ['Rock', 'Paper', 'Scissors'];

let score = JSON.parse(localStorage.getItem('scoreRPS'));
        
if (!score) {
    score = {
    wins: 0,
    losses: 0,
    ties: 0
    }    
}

setScore();

function compChoice() {
    const computerChoice = things[Math.floor(Math.random()*things.length)];
    return computerChoice;
}

function comparePlayers (playerChoice) {
    let computerChoice = compChoice();

    let playerImage = '';
    let compImage = '';

    if (playerChoice==='Rock') {
        playerImage = 'rock.png';
    } else if (playerChoice==='Paper') {
        playerImage = 'paper.png';
    } else {
        playerImage = 'scissors.png';
    }

    playerImage = "<img src='./images/" + playerImage + "'>"

    if (computerChoice==='Rock') {
        compImage = 'rock.png';
    } else if (computerChoice==='Paper') {
        compImage = 'paper.png';
    } else {
        compImage = 'scissors.png';
    }

    compImage = "<img src='./images/" + compImage + "'>"

    

    document.querySelector('.resultado').innerHTML = `You chose &nbsp;&nbsp;&nbsp;${playerImage}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;    ${compImage} &nbsp;&nbsp;&nbsp;Computer`;

    if (playerChoice === computerChoice) {
        score.ties++;
        setScore();        
        return "Tie";
    }
    
    if (computerChoice==='Paper') {
        if (playerChoice==='Scissors') {
            score.wins++;
            setScore();
            return 'You Win';
        }
        else {
            score.losses++;
            setScore();
            return 'You Lose';
        }
    }

    if (computerChoice==='Scissors') {
        if (playerChoice==='Rock') {
            score.wins++;
            setScore();
            return 'You Win';
        }
        else {
            score.losses++;
            setScore();
            return 'You Lose';
        }
    }

    if (computerChoice==='Rock') {
        if (playerChoice==='Paper') {
            score.wins++;
            setScore();
            return 'You Win';
        }
        else {
            score.losses++;
            setScore();
            return 'You Lose';
        }
    }   
}

function playGame(playerChoice) {
    const result = comparePlayers(playerChoice);
    document.querySelector('.final').innerHTML = result;
    setScore();
} 

function resetScore(){
    score = {
    wins: 0,
    losses: 0,
    ties: 0
    }
    setScore();

}

function setScore(){
    localStorage.setItem('scoreRPS', JSON.stringify(score));
    document.querySelector('.score').innerHTML = "WINS: " + score.wins + " LOSES: " + score.losses + " TIES: " + score.ties;
}
