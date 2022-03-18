import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/REST';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: any = [];
  UserById: any;
  modDash: any;
  modId: any;
  moderator: any;
  subjects: any = [];
  gcourses: any =  [];
  selectedCourse: any;
  subjectCourse: any;
  type: any;
  sem: any;
  course: any;
  stream: any;
  subject: any;

  constructor(public service: Service, public router: Router) { }

  ngOnInit(): void {
    // this.getresults();
    // this.checkToken();
    this.getModerator();
  }

  getModerator() {
    const Tid = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getModById({userId: Tid}).subscribe((t: any) => {
      this.moderator = t[0];
      this.subjects = t[0].subjects;
      console.log(this.subjects);
      /// this.gcourses = this.subjects;
      // this.getresults(this.);

    });
  }
  selectDetails(s) {
    // console.log(s);
    this.course = s.course;
    this.sem = s.sem;
    this.type = s.year;
    this.stream = s.stream;
    console.log({
      course : s.course,
      sem: s.sem,
      type: s.year,
      stream: s.stream,
      subCode: s.subCode
    });
    this.getResultsNew();

  }

  getResultsNew() {
    this.service.getResultBySubject({
      course : this.course,
      sem: this.sem,
      year: this.type,
      subject: this.subject.subject,
      subCode: this.subject.subCode,
      stream: this.subject.stream
    }).subscribe(r => {
      this.results = r;
      console.log(r);
    });
  }

  viewResult(result) {
    this.service.answerSheet = result;
    this.router.navigate(['/result-sheet']);
  }





//  old
  getresults(subjects) {
    this.service.getAns().subscribe((res: any) => {
      console.log(res);
      // tslint:disable-next-line:prefer-for-of
      for (let r = 0; r < res.length; r++) {
        // tslint:disable-next-line:prefer-for-of
        for (let s = 0; s < subjects.length; s++) {
          if (res[r].subject === subjects[s]) {
            this.results.push(res[r]);
            s = subjects.length;
            console.log('added');
          } else { console.log('rejected'); }

        }

      }





      // console.log(this.results);
    });
  }

  deleteResult(result) {
    this.service.deleteResult({id: result._id}).subscribe(r => {
      this.results = [];
      this.getresults(this.subjects);
    });

  }

}
