import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addChar, remove, result } from '../calculator.actions';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent {
  count!: Observable<string>

  constructor(private store: Store<{ count: string }>) {
    this.count = store.select('count');
  }

  addChar(char: string) {
    this.store.dispatch(addChar({char: char}));
  }

  remove() {
    this.store.dispatch(remove());
  }

  result() {
    this.store.dispatch(result());
  }
}
