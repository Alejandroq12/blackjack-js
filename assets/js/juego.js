/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

(() => {
  'use strict';

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'];
  const specialCards = ['A', 'J', 'Q', 'K'];
  let playerPoints = 0;
  let computerPoints = 0;

  // HTML references
  const getCardBtn = document.querySelector('#btnGet');
  const playAgainBtn = document.querySelector('#btnNew');
  const pointsElements = document.querySelectorAll('small');
  const divPlayerCards = document.querySelector('#player-cards');
  const divComputerCards = document.querySelector('#computer-cards');
  const stopBtn = document.querySelector('#btnStop');

  // This function initializes the game
  const initGame = () => {
    deck = createDeck();
  };

  // This function creates a new deck
  const createDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i += 1) {
      for (const tipo of tipos) {
        deck.push(`${i}${tipo}`);
      }
    }

    for (const tipo of tipos) {
      for (const special of specialCards) {
        deck.push(`${special}${tipo}`);
      }
    }
    return _.shuffle(deck);
  };

  // This function allows me to take a card
  const getCard = () => {
    if (deck.length === 0) {
      throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
  };

  const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === 'A' ? 11 : 10) : value * 1;
  };

  // Computer turn
  const computerTurn = (minimumPoints) => {
    do {
      const card = getCard();
      computerPoints += cardValue(card);
      pointsElements[1].innerText = computerPoints;
      const imgCard = document.createElement('img');
      imgCard.src = `assets/cards/${card}.png`;
      imgCard.classList.add('card');
      divComputerCards.append(imgCard);
      if (minimumPoints > 21) {
        break;
      }
    } while (computerPoints < minimumPoints && minimumPoints <= 21);

    setTimeout(() => {
      if (computerPoints === minimumPoints) {
        alert("It's a tie!!!!!");
      } else if (minimumPoints > 21) {
        alert('The computer is the winner!');
      } else if (computerPoints > 21) {
        alert('The player is the winner! Congratulations');
      } else {
        alert('The computer is the winner!');
      }
    }, 100);
  };

  // Events
  getCardBtn.addEventListener('click', () => {
    const card = getCard();
    playerPoints += cardValue(card);
    pointsElements[0].innerText = playerPoints;

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add('card');
    divPlayerCards.append(imgCard);

    if (playerPoints > 21) {
      console.warn('Lo siento mucho, perdiste');
      getCardBtn.disabled = true;
      stopBtn.disabled = true;
      computerTurn(playerPoints);
    } else if (playerPoints === 21) {
      console.warn('21, genial');
      getCardBtn.disabled = true;
      stopBtn.disabled = true;
      computerTurn(playerPoints);
    }
  });

  stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    getCardBtn.disabled = true;
    computerTurn(playerPoints);
  });

  playAgainBtn.addEventListener('click', () => {
    console.clear();
    initGame();
    // deck = [];
    // deck = createDeck();

    playerPoints = 0;
    computerPoints = 0;

    pointsElements[0].innerText = 0;
    pointsElements[1].innerText = 0;

    divPlayerCards.innerHTML = '';
    divComputerCards.innerHTML = '';

    stopBtn.disabled = false;
    getCardBtn.disabled = false;
  });
})();
