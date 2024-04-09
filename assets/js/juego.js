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

const crearDeck = () => {
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
  console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);
};

crearDeck();