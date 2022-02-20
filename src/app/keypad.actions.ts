import { createAction, props } from '@ngrx/store';

export const reset = createAction('[Keypad] Reset');

export const addChar = createAction(
  '[Keypad] Add character',
  props<{char: string}>()
);



