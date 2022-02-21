import { createAction, props } from '@ngrx/store';

export const addChar = createAction(
  '[Calculator] Add character',
  props<{char: string}>()
);

export const remove = createAction('[Calculator] Remove');

export const result = createAction('[Calculator] Result');

