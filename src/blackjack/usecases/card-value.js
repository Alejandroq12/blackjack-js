/**
 * This function returns the value(number) of the card
 * @param { String } card Example: '2C'
 * @returns { Number } The number that will be displayed as the player or computer point.
 */

export const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === 'A' ? 11 : 10) : value * 1;
};
