import { Component, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { FavoriteList } from 'src/app/interfaces';
import { createList, selectList } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  selectedList: string;
  listData: Array<FavoriteList>;
  imagesData: Array<string>;
  active: any;
  constructor(private store: Store<State>) {
    store.select(appState => appState.user).subscribe(state => {
      this.selectedList = state.selectedList;
      this.listData = state.favoriteList;
      console.log(this.listData);
    });
  }

  ngOnInit(): void {
  }

  selectActive(target) {
    if(this.active){
      this.active.className = "";
    }
    target.className = "active";
    this.active = target;
    if(this.listData.find(data => data.listName === target.innerText)){
      this.store.dispatch(selectList({selectedList: target.innerText}));
      this.imagesData = this.listData.find(data => data.listName === target.innerText).imageList;
    }
  }

  createList(target, newListName) {
    let newList = {
      listName: newListName.value,
      imageList: []
    }
    if(newListName.value === ''){
      alert('Enter list Name!!');
    } else if(this.listData.find(data => data.listName === newListName.value) === undefined){
      this.store.dispatch(createList({ list:newList }));
    } else {
      alert('List already exists!');
    }
  }

}
