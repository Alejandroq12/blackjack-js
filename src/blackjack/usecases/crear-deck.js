  import _ from 'underscore';

  export const createDeck = (typesOfCards, especialTypes) => {
    let deck = [];
    for (let i = 2; i <= 10; i += 1) {
      for (const tipo of typesOfCards) {
        deck.push(`${i}${tipo}`);
      }
    }

    for (const tipo of typesOfCards) {
      for (const special of especialTypes) {
        deck.push(`${special}${tipo}`);
      }
    }
    return _.shuffle(deck);
  };