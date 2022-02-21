import { createReducer, on } from '@ngrx/store';
import { addChar, remove } from './keypad.actions';

const correctPassword = '1337';

export interface Key {
  isCorrect: boolean,
  password: string
}

const initialState: Key = {
  isCorrect: false,
  password: ''
};

export const keypadReducer = createReducer(
  initialState,

  on(addChar, (state, {char}) => {
    if (state.password.length >= 4) {
      return state;
    }
    const newPassword = state.password + char;
    const newState = {...state, password: newPassword};

    if (newPassword === correctPassword) {
      newState.isCorrect = true;
    }

    return newState;
  }),

  on(remove, (state) => {
    const newPassword = state.password.substr(0,state.password.length - 1);
    const newState = {...state, password: newPassword};
    if (newPassword !== correctPassword) {
      newState.isCorrect = false;
    }
    return newState;
  }),
);
