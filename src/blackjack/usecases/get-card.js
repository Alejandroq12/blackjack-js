/**
 * This function gets the last card of the deck array
 * @param { Array<string> } deck - An Array of strings with card values
 * @returns { String } The last card of the deck as a string
 */
export const getCard = (deck) => {
  if (deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  return deck.pop();
};