import { createAction, props } from '@ngrx/store';

export const setActivePlayer = createAction(
  '[Game] Choose Player',
  props<{ player: number }>()
);

export const takeSticks = createAction(
  '[Game] Take sticks',
  props<{ count: number }>()
);

export const hoverTakeButton = createAction(
  '[Game] Hover take button',
  props<{ count: number }>()
);

export const endGame = createAction(
  '[Game] Game ended',
  props<{ winner: number }>()
)
