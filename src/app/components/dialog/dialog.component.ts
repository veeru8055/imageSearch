import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { FavoriteList } from 'src/app/interfaces';
import { createList, addFavorite } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  favoriteList: Array<FavoriteList>;
  imageUrl: any;
  listName: string;

  constructor(@Inject(MAT_DIALOG_DATA) data, public dialogRef: MatDialogRef<DialogComponent>, private store: Store<State>) {
    store.select(appState => appState.user).subscribe(state => {
      this.favoriteList = state.favoriteList;
    });
    this.imageUrl = data.imageUrl;
  }

  ngOnInit(): void {
  }

  createList(listName) {
    if(listName) {
      console.log(this.listName);
      this.store.dispatch(createList({
        list: {
          listName,
          description: 'Edit your description.',
          imageList: [this.imageUrl]
        }
      }));
      this.closeDialog();
    }
  }

  saveToList(selection) {
    if(selection) {
      if(this.favoriteList.find(data => data.listName === selection && data.imageList.find(img => img === this.imageUrl))){
      alert('Image already in the Favourite List!');
      } else {
        this.store.dispatch(addFavorite({
        imageData: {
            listName: selection,
            description: 'Edit your description.',
            imageList: [this.imageUrl]
          }
        }));
        this.closeDialog();
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
