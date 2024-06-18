export const getCard = (deck) => {
  if (deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  return deck.pop();
};