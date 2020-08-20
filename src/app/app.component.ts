import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imageSearch';
  constructor(private store: Store<State>){
  }
}
