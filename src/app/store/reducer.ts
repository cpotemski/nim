import { createReducer, Action, on } from '@ngrx/store';
import { initialGameState, GameState } from './store.model';
import { takeSticks, hoverTakeButton, setActivePlayer } from './actions';
import { PLAYER, COMPUTER } from '../constants';

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
  }))
);

export function RootReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
