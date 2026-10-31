
let score = {
    win: '0',
    lose: '0',
    tie: '0',
    updateScore: function () {
        this.getScore();
        document.querySelector('#score').innerHTML = `Score =Coputer win : ${this.lose} , You win : ${this.win} , match tie : ${this.tie}`
    },
    getScore:function(){
        let scorestr=JSON.stringify(this);
        localStorage.setItem('score',scorestr);
        console.log(`score saved ${scorestr}`);
    }
}

function initial(){
    let scorestr=localStorage.getItem('score');
    if(scorestr){
    console.log("get items frome local storage : ")
    let scoreVal=JSON.parse(scorestr);
    score.win=scoreVal.win;
    score.lose=scoreVal.lose;
    score.tie=scoreVal.tie;
    score.updateScore();
    }
}

//FOR COMPUTER CHOICE
function comChoise() {
    let rendome = Math.floor(Math.random() * 3 + 1);
    let computerchoise;
    if (rendome === 1) {
        computerchoise = `rock✊`;
    } else if (rendome === 2) {
        computerchoise = 'paper🖐';
    } else if (rendome === 3) {
        computerchoise = 'scissors✌';
    }
    return computerchoise;
}

function updateResult(userChoice, computerchoise, resultDisplay) {

    document.querySelector('#result').innerHTML =
        `you choose ${userChoice} <br> computer chose  ${computerchoise} 
       <br>${resultDisplay}!!!`
}


function computeResultdisplay(userchoise, computerchoise) {

    let resultDisplay = 'unknown';
    if (userchoise === computerchoise) {
        resultDisplay = 'match Tie 🙏';
        score.tie++;
    } else if (
        userchoise === `rock✊` && computerchoise === `scissors✌` || userchoise === `paper🖐` && computerchoise === `rock✊` || userchoise === `scissors✌` && computerchoise === `paper🖐`) {
        resultDisplay = 'you win'
        score.win++;
    } else {
        resultDisplay = 'you lose'
        score.lose++
    }
    score.updateScore();
    score.getScore();
    return resultDisplay;
}
// rock button function
function rockClicked() {
    computerchoise = comChoise();
    resultDisplay = computeResultdisplay(`rock✊`, computerchoise);
    updateResult(`rock✊`, computerchoise, resultDisplay);
}

//paper button function
function paperClicked() {
    computerchoise = comChoise();
    resultDisplay = computeResultdisplay(`paper🖐`, computerchoise);
    updateResult(`paper🖐`, computerchoise, resultDisplay);
}

//scissors function
function scissorsClicked() {
    computerchoise = comChoise();
    resultDisplay = computeResultdisplay(`scissors✌`, computerchoise);
    updateResult(`scissors✌`, computerchoise, resultDisplay);
}

function clearClicked(){
  
    console.log('reset : ')
    score.win=0;
    score.lose=0;
    score.tie=0;
    score.updateScore();
   
}

initial();



