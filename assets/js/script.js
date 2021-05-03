<<<<<<< HEAD
/*jshint esversion: 6 */
// Ref - Code Institute (Course content), PortExe (Video), Medium (Article), WebDev (Video), Invention Tricks (Video) - see README.md

// Contains template of game object(cards array, timer and turn counter)
class LanguageGame {
=======
// Ref - Code Institute (Course content), PortExe (Video), Medium (Article), WebDev (Video), Invention Tricks (Video) - see README.md
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
    // Music Functions
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

// 
class MixOrMatch {
>>>>>>> 8484efa (Clean code and comments for JS)
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeReamining = totalTime;
        this.timer = document.getElementById('game-timer');
        this.ticker = document.getElementById('turn-amount');
    }
    //  Start Game Function
<<<<<<< HEAD
    // Resets cards to check to zero, total clicks to 0 & matched cards array back to 0
=======
>>>>>>> 8484efa (Clean code and comments for JS)
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
// Creates a buffer of time to control when user can click
        setTimeout(() => {
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;

        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }
// When Game ends will reset cards and reflip them (if matched correctly)
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });

    }

    // Flip Cards Function
    flipCard(card) {
        if (this.canFlipCard(card)) {
            // Add increment of 1 to total clicks
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
// Check Cards for Match
    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);

        else
            this.cardMisMatch(card, this.cardToCheck);


            this.cardToCheck = null;
    }
<<<<<<< HEAD
// When Cards are Matched add matched class 
=======
// When Cards are Matched
>>>>>>> 8484efa (Clean code and comments for JS)
    cardMatch(card1, card2){
this.matchedCards.push(card1);
this.matchedCards.push(card2);
card1.classList.add('matched');
card2.classList.add('matched');
// When the number of matched cards is same number (length) as total cards - Victory function
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
<<<<<<< HEAD
// Card Identifiers for Matching from classname
=======
// Card Identifiers for Matching
>>>>>>> 8484efa (Clean code and comments for JS)
    getCardType(card) {
        return card.getElementsByClassName('animal-image')[0].src;
    }

   
<<<<<<< HEAD
// Game Timer (from 100 secs -> 0 secs)
=======
// Game Timer
>>>>>>> 8484efa (Clean code and comments for JS)
   startCountDown(){
return setInterval(() => {
    this.timeRemaining--;
    this.timer.innerText = this.timeRemaining;
    if(this.timeRemaining === 0)
    this.gameOver();
}, 1000);
}

 // Game Over Function
    gameOver() {
        clearInterval(this.countDown);
        document.getElementById('game-over-text').classList.add('visible');
    }

<<<<<<< HEAD
    // Victory Conditions Met
=======
    // Victory 
>>>>>>> 8484efa (Clean code and comments for JS)
    victory() {
        clearInterval(this.countDown);
        document.getElementById('victory-text').classList.add('visible');
        this.hideCards();
    }


    // Card Shuffler - (Fisher-Yates Algorithm)
    shuffleCards() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
    }
<<<<<<< HEAD

    // Check if Card can be flipped - (not busy & not already in matched cards array & is not the card being checked)
=======
>>>>>>> 8484efa (Clean code and comments for JS)
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

// Ready Overylays & Starting Game
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new LanguageGame(100, cards);

<<<<<<< HEAD
// Click to Remove Overlay (Event)
=======
// Click to Remove Overlay 
>>>>>>> 8484efa (Clean code and comments for JS)
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
<<<<<<< HEAD
// Click to Flip Card (Event)
=======
// Click to Flip Event
>>>>>>> 8484efa (Clean code and comments for JS)
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}
// Ensure game has loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}


                

