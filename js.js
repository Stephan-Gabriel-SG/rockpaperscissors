const RPS=['Rock','Paper','Scissors']
const HUMANWIN=[[0,2],[1,0],[2,1]]
let round = 1
let humanScore = 0
let computerScore = 0

function updateScoreAndRound(){
    const humanScoreContainer = document.getElementById('humanScore')
    const computerScoreContainer = document.getElementById('computerScore')
    const roundContainer = document.getElementById('roundNumber')
    humanScoreContainer.innerText = humanScore
    computerScoreContainer.innerText = computerScore
    roundContainer.innerText = round
}

function updateBattleChoice(humanChoice, computerChoice){
    const humanImageContainer = document.getElementById('humanChoice')
    const computerImageContainer = document.getElementById('computerChoice')

    setTimeout(() => {    
        humanImageContainer.classList.remove('humanChoiceAnimation');
        computerImageContainer.classList.remove('computerChoiceAnimation');
    }, 500);

    // Changer les images avant de réappliquer l'animation
    humanImageContainer.setAttribute('src', `images/${RPS[humanChoice]}-h.png`);
    computerImageContainer.setAttribute('src', `images/${RPS[computerChoice]}.png`);

    humanImageContainer.classList.add('humanChoiceAnimation');
    computerImageContainer.classList.add('computerChoiceAnimation');
    
}

function getComputerChoice(){
    return Math.floor( (Math.random() + Math.random()) / 2 * 3)
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const messageContainer = document.getElementById('message')
    updateBattleChoice(humanChoice,computerChoice)
    if(humanChoice!==computerChoice)
    {
        let round=[humanChoice, computerChoice]
        let isHumanWin = (HUMANWIN.map(val=>val.every((v,i)=>v==round[i]))).some(result=>result==true)
        if(isHumanWin){
            messageContainer.innerText =`You win! ${RPS[humanChoice]} beats ${RPS[computerChoice]}`
            console.log(`You win! ${RPS[humanChoice]} beats ${RPS[computerChoice]}`)
            humanScore++
        } 
        else{
            messageContainer.innerText =`You lose! ${RPS[computerChoice]} beats ${RPS[humanChoice]}`
            console.log(`You lose! ${RPS[computerChoice]} beats ${RPS[humanChoice]}`)
            computerScore++
        }
    }

    else{
        messageContainer.innerText =`Equality`
        console.log(`Equality`)
        computerScore++
        humanScore++
    }
    round++
    updateScoreAndRound()
  }