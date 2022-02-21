import { createReducer, on } from '@ngrx/store';
import { addChar, remove, result } from './calculator.actions';

const initialState = '';

export const calculatorReducer = createReducer(
  initialState,
  on(addChar, (state, {char}) => {
    return  state + char;
  }),

  on(remove, (state) => {
    return state.substr(0,state.length - 1);
  }),

  on(result, (state) => {
    const newState = eval(state);
    return newState.toString();
  })
);

