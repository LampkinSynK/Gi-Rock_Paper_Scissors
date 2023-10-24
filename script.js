let randomInt = null;
let compValue = '';
let playerValue ='';
const scissorsButton = document.querySelector('[data-scissor]');
const rockButton = document.querySelector('[data-rock]');
const paperButton = document.querySelector('[data-paper]');



randomComp = () => {
    randomInt = Math.floor(Math.random() * 3);

    switch (randomInt) {
        case 0:
            compValue = 'Rock';
            break;
        case 1:
            compValue = 'Paper';
            break;
        case 2:
            compValue = 'Scissors';
            break;
    }
}


checkMatchUp = (player, comp) => { 
    if (player===comp) return('');
    
    switch (player) {
        case 'Rock':
            if (comp === 'Paper') return(false); 
            if (comp === 'Scissors') return(true); 
            break;
        case 'Paper':
            if (comp === 'Scissors') return(false); 
            if (comp === 'Rock') return(true); 
            break;
        case 'Scissors':
            if (comp === 'Rock') return(false); 
            if (comp === 'Paper') return(true); 
            break;
    }
}


scissorsButton.addEventListener('click', button => {
    playerValue = 'Scissors';
    randomComp();
    checkMatchUp(playerValue, compValue);
})

rockButton.addEventListener('click', button => {
    playerValue = 'Rock';
    randomComp();
    checkMatchUp(playerValue, compValue);
})

paperButton.addEventListener('click', button => {
    playerValue = 'Paper';
    randomComp();
    checkMatchUp(playerValue, compValue);
})