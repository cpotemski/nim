import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PLAYER } from '../constants';
import { GameState } from './store.model';

const gameStateSelector = createFeatureSelector('game');

export const isPlayerActive = createSelector(
  gameStateSelector,
  (state: GameState) => state.activePlayer === PLAYER
)

export const getStickCount = createSelector(
  gameStateSelector,
  (state: GameState) => state.sticks
);

export const getHoveredCount = createSelector(
  gameStateSelector,
  (state: GameState) => state.sticksHovered
);

export const getWinner = createSelector(
  gameStateSelector,
  (state: GameState) => state.winner
)
