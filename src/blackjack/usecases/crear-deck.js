  import _ from 'underscore';

  /**
   * This function creates a new deck.
   * @param { Array<string> } typesOfCards Ejemplo: ['C', 'D', 'H', 'S']
   * @param { Array<string> } especialTypes Ejemplo: ['A', 'J', 'Q', 'K']
   * @returns { Array } It returns a new deck of cards.
   */
  export const createDeck = (typesOfCards, especialTypes) => {
    if(!typesOfCards || typesOfCards.length === 0) throw new Error('typesOfCards it is required as an array of strings!');
    if(!especialTypes || especialTypes.length === 0) throw new Error('especialTypes it is required as an array of strings!');

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
    return deck = _.shuffle(deck);
  };