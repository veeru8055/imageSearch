import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchKeyword: string;
  constructor(private http: HttpClient, private store: Store<State>) {
    this.store.select(appState => appState.user.searchKeyword).subscribe((searchKeyword) => {
      this.searchKeyword = searchKeyword;
    });
  }

  getImages() {
    if(this.searchKeyword){
      return this.http.get('https://api.unsplash.com/search/photos/?client_id=3aOO3NDSYDGfBuo0u33GLnMgbQs7N-uigsoe3FPuaMM&query=' + this.searchKeyword);
    }
  }
}
