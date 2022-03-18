import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';

@Component({
  selector: 'app-question-over-view',
  templateUrl: './question-over-view.component.html',
  styleUrls: ['./question-over-view.component.css']
})
export class QuestionOverViewComponent implements OnInit {
  paper: any;
  live = false;
  i = 0;
  question: any;

  constructor(public service: Service) { }

  ngOnInit(): void {
    this.ViewPaper();
  }

  ViewPaper() {
    this.paper = this.service.viewPaper;
    this.question = this.service.viewPaper.testPapers;
   // this.dataDisplay = this.question;
    //  this.i+1;
     console.log(this.question);
    }

}
