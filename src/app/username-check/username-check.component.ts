import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css'],
})
export class UsernameCheckComponent implements OnInit {
  userName = '';
  constructor() {
  }
  onClearField() {
    this.userName = '';
  }

  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {}
}
