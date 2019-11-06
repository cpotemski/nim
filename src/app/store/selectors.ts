import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GameState } from './store.model';
import { PLAYER } from '../constants';

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
