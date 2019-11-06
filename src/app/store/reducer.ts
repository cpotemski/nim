import { Action, createReducer, on } from '@ngrx/store';
import { COMPUTER, PLAYER } from '../constants';
import { endGame, hoverTakeButton, restartGame, setActivePlayer, takeSticks } from './actions';
import { GameState, initialGameState } from './store.model';

const reducer = createReducer(
  initialGameState,
  on(setActivePlayer, (state, action) => ({
    ...state,
    activePlayer: action.player
  })),
  on(takeSticks, (state, action) => ({
    ...state,
    sticks: state.sticks - action.count,
    sticksHovered: 0,
    activePlayer: state.activePlayer === PLAYER ? COMPUTER : PLAYER
  })),
  on(hoverTakeButton, (state, action) => ({
    ...state,
    sticksHovered: action.count || 0
  })),
  on(endGame, (state, action) => ({
    ...state,
    activePlayer: undefined,
    sticksHovered: 0,
    winner: action.winner
  })),
  on(restartGame, () => ({
    ...initialGameState,
    activePlayer: Math.round(Math.random()) === 0 ? PLAYER : COMPUTER
  }))
);

export function RootReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
