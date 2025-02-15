import _ from 'underscore';
import { createDeck, getCard, cardValue } from './usecases';
/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

const myModule = (() => {
  'use strict';

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'];
  const specialCards = ['A', 'J', 'Q', 'K'];
  // let playerPoints = 0;
  // let computerPoints = 0;
  let playersPoints = [];

  // HTML references
  const getCardBtn = document.querySelector('#btnGet');
  const playAgainBtn = document.querySelector('#btnNew');
  const pointsElements = document.querySelectorAll('small');
  const divPlayersCards = document.querySelectorAll('.divCards');
  const stopBtn = document.querySelector('#btnStop');
  // This function initializes the game
  const initGame = (numJugadores = 2) => {
    deck = createDeck(tipos, specialCards);

    playersPoints = [];
    for (let i = 0; i < numJugadores; i += 1) {
      playersPoints.push(0);
    }

    pointsElements.forEach((pointElement) => (pointElement.innerText = 0));
    divPlayersCards.forEach(
      (divPlayerCardElement) => (divPlayerCardElement.innerHTML = '')
    );

    stopBtn.disabled = false;
    getCardBtn.disabled = false;
  };

  // Turn: 0 = first player and the last one it is the computer.
  const accumulatePoints = (card, turn) => {
    playersPoints[turn] += cardValue(card);
    pointsElements[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
  };

  const createCard = (card, turn) => {
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add('card');
    divPlayersCards[turn].append(imgCard);
  };

  const determineWinner = () => {
    const [minimumPoints, computerPoints] = playersPoints;
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

  // Computer turn
  const computerTurn = (minimumPoints) => {
    let computerPoints = 0;
    do {
      const card = getCard(deck);
      computerPoints = accumulatePoints(card, playersPoints.length - 1);
      createCard(card, playersPoints.length - 1);
    } while (computerPoints < minimumPoints && minimumPoints <= 21);
    determineWinner();
  };

  // Events
  getCardBtn.addEventListener('click', () => {
    const card = getCard(deck);
    const playerPoints = accumulatePoints(card, 0);
    createCard(card, 0);
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
    computerTurn(playersPoints[0]);
  });

  playAgainBtn.addEventListener('click', () => {
    initGame();
  });

  return {
    newGame: initGame,
  };
})();
