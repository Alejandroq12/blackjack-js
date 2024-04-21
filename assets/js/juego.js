/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

// HTML references
const getCardBtn = document.querySelector('#btnGet');
const pointsElements = document.querySelectorAll('small');
const divPlayerCards = document.querySelector('#player-cards');
const divComputerCards = document.querySelector('#computer-cards');
const stopBtn = document.querySelector('#btnStop');

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];
let playerPoints = 0;
let computerPoints = 0;

// This function creates a new deck
const createDeck = () => {
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
  deck = _.shuffle(deck);
};

createDeck();

// This function allows me to take a card
const getCard = () => {
  if (deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  const card = deck.pop();
  return card;
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
  } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));
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
    computerTurn(playerPoints);
    stopBtn.disabled = true;
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
