const RPS=['Rock','Paper','Scissors']
const HUMANWIN=[[0,2],[1,0],[2,1]]
let score = 0

function getHumanChoice(){
    return 2
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3)
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice!==computerChoice)
    {
        let round=[humanChoice, computerChoice]
        let isHumanWin = (HUMANWIN.map(val=>val.every((v,i)=>v==round[i]))).some(result=>result==true)
        if(isHumanWin){
            console.log(`You win! ${RPS[humanChoice]} beats ${RPS[computerChoice]}`)
        } 
        else{
            console.log(`You lose! ${RPS[computerChoice]} beats ${RPS[humanChoice]}`)
        }
    }
    else{
        console.log(`Equality`)
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  