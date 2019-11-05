import { createAction, props } from '@ngrx/store';

export const takeSticks = createAction(
  '[Game] Take sticks',
  props<{ count: number }>()
);

export const hoverTakeButton = createAction(
  '[Game] Hover take button',
  props<{ count: number }>()
);
