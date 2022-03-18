import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';

@Component({
  selector: 'app-view-desc-set',
  templateUrl: './view-desc-set.component.html',
  styleUrls: ['./view-desc-set.component.css']
})
export class ViewDescSetComponent implements OnInit {
  testPaper: any;
  selectedQuestion: any = [];
  ready: boolean;
  allQuestions: any;

  question: any;
  subject: string;
  type: string;
  semester: string;
  teacher: string;
  qModel: any;
  moderator: any;

  constructor(public service: Service) { }

  ngOnInit(): void {
    this.testPaper = this.service.viewPaper;
    console.log(this.testPaper);
    this.getModerator();
  }

  getModerator() {
    const Tid = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getModById({userId: Tid}).subscribe((t: any) => {
      this.moderator = t[0];
      console.log(this.moderator);
    });
  }
  select(q: any, evt: any) {
    if (evt.target.checked) {
      this.selectedQuestion.push(q);
      console.log(this.selectedQuestion);
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.selectedQuestion.length ; i++) {
        if (q._id === this.selectedQuestion[i]._id) {
          this.selectedQuestion.splice(i, 1);
          console.log(this.selectedQuestion);
        }
      }
     }

  }

  submit() {
    const paperTemp = [];
    for (const q of this.selectedQuestion) {
      paperTemp.push({
        index: q.index,
        marks: q.marks,
        question: q.question,
        option1: null,
        option2:  null,
        option3:  null,
        option4:  null,
        answer:  null,

        file:  null,

        imgOpt1:  null,

        imgOpt2:  null,

        imgOpt3:  null,

        imgOpt4:  null,

        imgAnswer:  null

      });
      if (this.selectedQuestion.length === paperTemp.length) {
        console.log(this.selectedQuestion.length, paperTemp.length);
        this.service.pushSelectedQuetions({id: this.moderator._id, paper: paperTemp}).subscribe(set => { console.log(set); });
        alert('Ready To Finalise The Paper');
      } else {
        console.log(this.selectedQuestion.length, paperTemp.length);
      }
    }
    alert('Ready To Finalise The Paper');
  }

}
