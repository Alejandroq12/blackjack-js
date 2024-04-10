/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

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
  return (isNaN(value))
    ? (value === 'A') ? 11 : 10
    : value * 1;
};

const value = cardValue(getCard());
console.log(value);