import { createAction, props } from '@ngrx/store';

export const takeSticks = createAction(
  '[Game] Take sticks',
  props<{ count: number }>()
);
