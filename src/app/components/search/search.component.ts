import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { loadImages, updateKeyword } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  showLoader = false;
  timer: any;
  imagesData: any;
  searchKeyword: string; 
  constructor(private service: UserService, private store: Store<State>) {
    this.store.select(appState => appState.user).subscribe((state) => {
      if(state){
        this.searchKeyword = state.searchKeyword;
        this.imagesData = state.imageData['results'];
        console.log(state);
      }
    });
  }

  onSearchChange(searchValue: string): void {
    if(searchValue.length >= 3){
      this.showLoader = true;
    } else {
      this.showLoader = false;
    }
    if(this.timer){
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      if(searchValue.length >= 3){
        this.showLoader = false;
        this.store.dispatch(updateKeyword({searchKeyword: searchValue}));
        this.store.dispatch({ type: '[Image Page] Load Images' });
       }
    }, 2000);
  }

  ngOnInit(): void {
  }

}
