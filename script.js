function computerPlay() {
    var things = ['Rock', 'Paper', 'Scissors'];
    var thing = things[Math.floor(Math.random() * things.length)];
    alert('The computer chose: ' + thing);
}

computerPlay();

function singlePlay (playerSelection, computerSelection) {
    var option = prompt('Choose out of 3').ignoreCase;

    
    if (computerPlay)
}