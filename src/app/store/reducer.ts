import { createReducer, Action, State, on } from '@ngrx/store';
import { initialGameState, GameState } from './store.model';
import { takeSticks } from './actions';

const reducer = createReducer(
  initialGameState,
  on(takeSticks, (state, action) => ({
    ...state,
    sticks: state.sticks - action.count
  })),
);

export function RootReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
