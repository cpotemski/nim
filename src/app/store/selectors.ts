import { createSelector } from '@ngrx/store';
import { GameState, MyState } from './store.model';

const gameStateSelector = (state: MyState) => state.game;

export const getStickCount = createSelector(
  gameStateSelector,
  (state: GameState) => state.sticks
);

export const getHoveredCount = createSelector(
  gameStateSelector,
  (state: GameState) => state.sticksHovered
);
