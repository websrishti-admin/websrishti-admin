import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator-home',
  templateUrl: './moderator-home.component.html',
  styleUrls: ['./moderator-home.component.css']
})
export class ModeratorHomeComponent implements OnInit {
  UserById: any;

  constructor() { }

  ngOnInit(): void {
    this.checkToken();
  }
  checkToken() {
    if (! (JSON.parse(localStorage.getItem('moderatorId')))) {
      this.UserById = false;

    } else { this.UserById = true; }
  }

}
