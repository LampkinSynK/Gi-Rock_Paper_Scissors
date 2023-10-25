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
        return;
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
}

reset = () => {
    counter.innerHTML = 0;
    compCounter.innerHTML = 0;
    decision.innerHTML = '';
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

