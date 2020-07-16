import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {NavbarState} from './navbar.state';
import {addNotification} from './navbar.actions';

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  number = 0;

  constructor(private store: Store<NavbarState>) {
  }

  ngOnInit() {
  }

  add() {
    this.store.dispatch(addNotification({notification: `Notification: ${this.number}`}));
    this.number++;
  }

}
