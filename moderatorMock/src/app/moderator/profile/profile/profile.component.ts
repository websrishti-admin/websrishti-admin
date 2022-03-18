import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/REST';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  moderator:any;
  user: any;

  constructor(public service:Service, public router: Router) { }

  ngOnInit(): void {
    this.getUser();
    // this.getModerator();
  }
  getModerator() {
    const Tid = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getModById({userId: Tid}).subscribe((t: any) => {
      this.moderator = t[0];
      console.log(this.moderator);
    });
  }

  getUser() {
    const UserId = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getUserById({id: UserId}).subscribe(u => {
      console.log(u);
      this.user = u;
    })
  }

  edit() {
    this.router.navigate(['/edit']);
  }

}
