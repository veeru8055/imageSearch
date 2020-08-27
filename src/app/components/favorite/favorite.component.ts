import { Component, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { FavoriteList } from 'src/app/interfaces';
import { createList, selectList, editList } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  editMode = false;
  selectedList: string;
  listData: Array<FavoriteList>;
  selectedListData: FavoriteList;
  listName: string;
  description: string;
  active: any;
  constructor(private store: Store<State>) {
    store.select(appState => appState.user).subscribe(state => {
      this.selectedList = state.selectedList;
      this.listData = state.favoriteList;
    });
  }

  ngOnInit(): void {
  }

  selectActive(target) {
    if(this.active){
      this.active.className = '';
    }
    target.className = 'active';
    this.active = target;
    if(this.listData.find(data => data.listName === target.innerText)){
      this.store.dispatch(selectList({selectedList: target.innerText}));
      this.selectedListData = this.listData.find(data => data.listName === target.innerText);
      this.listName = this.selectedListData.listName;
      this.description = this.selectedListData.description;
    }
  }

  createList(newListName) {
    let newList = {
      listName: newListName.value,
      description: 'Edit your description.',
      imageList: []
    }
    if(newListName.value === ''){
      alert('Enter list Name!!');
    } else if(this.listData.find(data => data.listName === newListName.value) === undefined){
      this.store.dispatch(createList({ list:newList }));
      newListName.value = '';
    } else {
      alert('List already exists!');
    }
  }

  edit() {
    this.editMode = true;
  }

  save(listName, description) {
    if(listName && description && !this.listData.find(data => data.listName === listName && listName !== this.selectedListData.listName)){
      this.store.dispatch(editList({
        oldListName: this.selectedListData.listName,
        list : {
          listName,
          description,
          imageList: this.selectedListData.imageList
        }
      }));
      this.store.dispatch(selectList({selectedList: listName}));
      this.selectedListData = this.listData.find(data => data.listName === listName);
      this.listName = this.selectedListData.listName;
      this.description = this.selectedListData.description;
      this.editMode = false;
    } else {
      alert('Invalid Title or Description');
    }
  }

}
