/*jshint esversion: 6 */
// Ref - Code Institute (Course content), PortExe (Video), Medium (Article), WebDev (Video), Invention Tricks (Video) - see README.md

// Contains template of game object(cards array, timer and turn counter)
class LanguageGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeReamining = totalTime;
        this.timer = document.getElementById('game-timer');
        this.ticker = document.getElementById('turn-amount');
    }
    //  Start Game Function
    // Resets cards to check to zero, total clicks to 0 & matched cards array back to 0
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
// When Cards are Matched add matched class 
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
// Card Identifiers for Matching from classname
    getCardType(card) {
        return card.getElementsByClassName('animal-image')[0].src;
    }

   
// Game Timer (from 100 secs -> 0 secs)
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

    // Victory Conditions Met
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

    // Check if Card can be flipped - (not busy & not already in matched cards array & is not the card being checked)
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

// Ready Overylays & Starting Game
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new LanguageGame(100, cards);

// Click to Remove Overlay (Event)
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
// Click to Flip Card (Event)
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


                

