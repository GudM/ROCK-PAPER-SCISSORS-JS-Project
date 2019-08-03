function computerPlay() {
    let things = ['rock', 'paper', 'scissors'];
    let thing = things[Math.floor(Math.random() * things.length)];
    return thing;
}

function userPlay() {
    let choice = prompt('choose').toLowerCase();
        return choice;
}

function roundPlay() {
   
    if (computerPlay == userPlay) {
        return ('Draw');
    }
    
    else if (
        (userPlay == 'scissors' && computerPlay == 'rock') ||
        (userPlay == 'paper' && computerPlay == 'scissors') ||
        (userPlay == 'rock' && computerPlay == 'paper')
    )
        { return ('You have won');}
    
    else if (
        (computerPlay == 'scissors'  && userPlay == 'rock') ||
        (computerPlay == 'paper'  && userPlay == 'scissors') ||
        (computerPlay == 'rock'  && userPlay == 'paper')
    )
        { return ('You lose');}
    
    else 
        {
            return ('Re-Play');
        }
}

let userSelection = userPlay();
let computerSelection = computerPlay();

alert(roundPlay(userSelection, computerSelection));