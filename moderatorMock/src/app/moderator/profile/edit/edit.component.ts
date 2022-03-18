import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/REST';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any;
  UserById: any = "";
  newPass: string;
  confPass: string;
  newContact: string;

  constructor(public service: Service, public router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const UserId = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getUserById({id: UserId}).subscribe(u => {
      
      this.user = u;
    })
  }

  updatePass() {
    if (this.newPass === this.confPass) {
      
      this.service.UpdatePassword({email: this.user.email, password: this.user.password, newPassword: this.newPass}).subscribe(u => {
        alert('updated');
        this.router.navigate(['profile']);
      })
    } else {
      alert('Passwords do not mattch')
      
    }
    
  }


}
