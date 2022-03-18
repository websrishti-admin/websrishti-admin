import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public service: Service, public router: Router) { }
  user: any;
  password: any;
  email: any;
  @Output() signedInEvent= new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  signIn() {
    this.user = {
      email: this.email,
      password: this.password
    };
    this.service.signIn(this.user).subscribe((res) => {
      if (!res) {
        console.log('user not found');
      } else {
        localStorage.setItem('moderatorId', JSON.stringify(res) );
       // location.reload();
       this.signedInEvent.emit();
       
      }

      // console.log(res);
     });
  }

}
