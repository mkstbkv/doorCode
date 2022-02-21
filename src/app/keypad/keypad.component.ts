import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addChar, remove } from '../keypad.actions';
import { Key } from '../keypad.reducer';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.sass']
})

export class KeypadComponent {
  key!: Observable<Key>;
  keyNow!: Key;
  isCorrect = '';
  constructor(private store: Store<{ key: Key }>) {
    this.key = store.select('key');
    this.key.subscribe(res => {
      this.keyNow = res;
    });
  }

  asterisks() {
    if (this.keyNow.password.length > 0) {
      return '*'.repeat(this.keyNow.password.length)
    }
    return '';
  }

  addChar(char: string) {
    this.store.dispatch(addChar({char: char}));
  }

  remove() {
    this.store.dispatch(remove());
    this.isCorrect = '';
  }

  result() {
    if (this.keyNow.isCorrect) {
      this.isCorrect = 'Access Granted'
    }

    if (!this.keyNow.isCorrect) {
      this.isCorrect = 'Access Denied'
    }
  }

  getClassName() {
    if (this.isCorrect === 'Access Granted') {
      return ['key','green'];
    }

    if (this.isCorrect === 'Access Denied') {
      return ['key','red'];
    }

    return 'key';
  }
}
