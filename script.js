let randomInt = null;
let compValue = '';
let playerValue ='';
const scissorsButton = document.querySelector('[data-scissor]');
const rockButton = document.querySelector('[data-rock]');
const paperButton = document.querySelector('[data-paper]');
const counter = document.querySelector('[data-screen]');
const compCounter = document.querySelector('[data-compScreen]');
const decision = document.querySelector('[data-decision]');



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
    if (player===comp) {
        decision.innerHTML = "It's a Tie!";
        
    }
    else if (((player==='Rock')&&(comp==='Scissors')||((player==='Paper')&&(comp==='Rock')||((player==='Scissors')&&(comp==='Paper'))))){
        newValue = parseFloat(counter.innerText) + 1;
        counter.innerHTML = newValue;
        decision.innerHTML = 'You Win!';
    }
    else {
        newValue = parseFloat(compCounter.innerText) + 1;
        compCounter.innerHTML = newValue;
        decision.innerHTML = 'You Lose!';
    }

    switch (comp) {
        case "Rock":
            changeImage('images/opprockhand.png','opponent_option');
            break;
        case "Paper":
            changeImage('images/opppaperhand.png','opponent_option');
            break;
        case "Scissors":
            changeImage('images/oppscissorshand.png','opponent_option');
            break;
        default:
            break;
    }
}

reset = () => {
    counter.innerHTML = 0;
    compCounter.innerHTML = 0;
    decision.innerHTML = '';
    changeImage('','option');
    changeImage('','opponent_option');
}

scissorsButton.addEventListener('click', button => {
    playerValue = 'Scissors';
    randomComp();
    checkMatchUp(playerValue, compValue);
    changeImage('images/scissorshand.png','option');
    
})

rockButton.addEventListener('click', button => {
    playerValue = 'Rock';
    randomComp();
    checkMatchUp(playerValue, compValue);
    changeImage('images/rockhand.png','option');
})

paperButton.addEventListener('click', button => {
    playerValue = 'Paper';
    randomComp();
    checkMatchUp(playerValue, compValue);
    changeImage('images/paperhand.png','option');
})

changeImage = (img,option) => {
    document.getElementById(option).src=img;
}
