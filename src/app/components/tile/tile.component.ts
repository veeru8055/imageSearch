import { Component, OnInit, Input } from '@angular/core';
import { FavoriteList } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { createList, addFavorite } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() imageData: ImageData;

  favoriteListNames: Array<FavoriteList>;

  constructor(private store: Store<State>) {
    console.log(this.imageData === undefined);
    store.select(appState => appState.user.favoriteList).subscribe(data => {
      this.favoriteListNames = data;
    });
  }

  ngOnInit(): void {
  }

  createList(newListName) {
    let newList = {
      listName: newListName.value,
      imageList: []
    }
    if(newListName.value === ''){
      alert('Enter list Name!!');
    } else if(this.favoriteListNames.find(data => data.listName === newListName.value) === undefined){
      this.store.dispatch(createList({ list:newList }));
    } else {
      alert('List already exists!');
    }
  }

  save(imageUrl, selection){
    if(this.favoriteListNames.find(data => data.listName === selection && data.imageList.find(img => img === imageUrl))){
      alert('Image already in the Favourite List!');
    } else {
      this.store.dispatch(addFavorite({
        imageData: {
          listName: selection,
          imageList: [imageUrl]
        }
      }));
    }
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
