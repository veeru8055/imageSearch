import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  listName: string;
  data = [1,2,43,2134,213,4132,321,12,321,,22,1,1,11,1,1,,1,11,1];
  constructor(private store: Store<State>) {
    store.select(appState => appState.user.selectedList).subscribe(listName => {
      this.listName = listName;
    });
  }

  ngOnInit(): void {
  }

}
