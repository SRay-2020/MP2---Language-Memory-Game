// User Name Prompt 

let customerName = prompt("Please enter your name", "<name goes here>");

// function getUserName(){
// var playerName = prompt("Hello New Player. Please enter your name:");
// document.getElementById('output').innerHTML;
// }




// Audio Controler 
class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/music/BackMusic.wav')
        this.flipSound = new Audio('assets/music/newflipper.wav')
        this.matchSound = new Audio('assets/music/matchSound.wav')
        this.victorySound = new Audio('assets/music/winSound.wav')
        this.gameOverSound = new Audio('assets/music/gameoverSound.wav')
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }

    startMusic() {
        this.bgMusic.play();
    }

    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }

    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

// Select Pairs 

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeReamining = totalTime;
        this.timer = document.getElementById('game-timer');
        this.ticker = document.getElementById('turn-amount');
        this.audioController = new AudioController();
    }
    startGame() {
        this.getUserName;
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;

        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });

    }


    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');


            if (this.cardToCheck) {
                this.checkForCardMatch(card);
            }

            else
                this.cardToCheck = card;
        }
    }

    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);

        else
            this.cardMisMatch(card, this.cardToCheck);


            this.cardToCheck = null;
    }

    cardMatch(card1, card2){
this.matchedCards.push(card1);
this.matchedCards.push(card2);
card1.classList.add('matched');
card2.classList.add('matched');
this.audioController.match();
if(this.matchedCards.length === this.cardsArray.length)
this.victory();
    }

    cardMisMatch(card1, card2){

        this.busy = true;
        setTimeout(() => {
card1.classList.remove('visible');
card2.classList.remove('visible');
this.busy = false;
    }, 1000);
    }





    getCardType(card) {
        return card.getElementsByClassName('animal-image')[0].src;
    }

    // Game Over 

   startCountDown(){
return setInterval(() => {
    this.timeRemaining--;
    this.timer.innerText = this.timeRemaining;
    if(this.timeRemaining === 0)
    this.gameOver();
}, 1000);

}



    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }

    // Victory 

    victory() {
        let customerName;
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
        // document.getElementById("winnerText").innerHTML =
        // "Hello " + customerName + "You won! :) ";
        this.hideCards();
    }


    // Card Shuffler - Fisher-Yates Algorithm

    shuffleCards() {

        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
    }

    canFlipCard(card) {
       
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}






// Ready/Start Game Function 
function ready() {

    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(overlay => {

        overlay.addEventListener('click', () => {

            overlay.classList.remove('visible');
            game.startGame();

            // let audioController = new AudioController();
            // audioController.startMusic();

        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {

            game.flipCard(card);
        });
    });

}

if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

// Rewriting Username in overylays 

// function userYourName() {

// if(playerName = true) {
// document.getElementById('winnerText').innerHTML=`Congratulations ${playerName}! Click to restart`;
// }
// else {
// document.getElementById('winnerText').innerHTML=(`Congratulations! Click to restart`);
// }

// }
                  

