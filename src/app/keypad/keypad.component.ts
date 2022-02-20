import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addChar } from '../keypad.actions';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.sass']
})
export class KeypadComponent {
  key!: Observable<string>

  constructor(private store: Store<{ key: string }>) {
    this.key = store.select('key');
  }

  addChar(char: string) {
    this.store.dispatch(addChar({char: char}));
  }
}
