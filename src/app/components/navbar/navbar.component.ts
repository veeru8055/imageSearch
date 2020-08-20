import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @ViewChild('searchTab') searchTab: ElementRef;
  @ViewChild('favoriteTab') favoriteTab: ElementRef; 

  constructor(private router: Router, private store: Store<State>) {
   }

  ngOnInit(): void {
  }

  activeSelection(tabName) {
    if (tabName === 'search') {
      this.searchTab.nativeElement.className = 'active';
      this.favoriteTab.nativeElement.className = '';
    }
    else if (tabName === 'favorite') {
      this.favoriteTab.nativeElement.className = 'active';
      this.searchTab.nativeElement.className = '';
    }
  }
}
