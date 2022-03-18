import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Service } from 'src/app/services/REST';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.component.html',
  styleUrls: ['./question-set.component.css']
})
export class QuestionSetComponent implements OnInit {
  paperBank: any;
  subjects: any =  [];
  types: any =  [];
  semesters: any =  [];
  subject: any;
  type: any;
  sem: any;
  moderator: any;
  course: any;
  stream: any;

  @ViewChild('quesTable') userTable: ElementRef;

  constructor(public service: Service, public route: Router) { }

  ngOnInit(): void {
    // this.getPapers();
    this.getModerator();
    // console.log(this.paperBank);
  }

  // new

  getModerator() {
    const Tid = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getModById({userId: Tid}).subscribe((t: any) => {
      this.moderator = t[0];
      this.subjects = t[0].subjects;
      let modsub = '';
      this.subjects.forEach(element => {
        console.log(element.subject);
          modsub = modsub + "|" + element.subject;
      });
      console.log(modsub);
      localStorage.setItem('modsub',modsub);
       
      console.log("moderator");
      console.log(this.subjects);
      console.log(localStorage.getItem('modsub'));

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
    this.getPapers(s);
  }









  // old
  getPapers(s) {
    console.log({
      course : s.course,
      sem: s.sem,
      type: s.type,
      sub: s.subject,
      subCode: s.subCode
    });
    this.service.getTestPaperMderator({
      course : this.course,
      sem: this.sem,
      type: this.type,
      sub: this.subject.subject,
      subCode: this.subject.subCode,
      stream: this.subject.stream
    }).subscribe((set: any) => {
      this.paperBank = set;
      console.log(set);
     });
  }

  viewPaper(paper) {
    this.service.viewPaper = paper;
    this.route.navigate(['/selectQuestions']);
  }
  getSubjects(papers)  {
    for (const paper of papers) {
      if (this.subjects.length === 0 ) {
       this.subjects.push(paper.subject);
      } else {
         if (this.subjects.indexOf(paper.subject) < 0 ) {
           this.subjects.push(paper.subject);
         }
      }
      if (this.types.length === 0 ) {
       this.types.push(paper.type);
      } else {
         if (this.types.indexOf(paper.type) < 0 ) {
           this.types.push(paper.type);
         }
      }
      if (this.semesters.length === 0 ) {
       this.semesters.push(paper.sem);
      } else {
         if (this.semesters.indexOf(paper.sem) < 0 ) {
           this.semesters.push(paper.sem);
         }
      }

     }

 }
 getTypes(papers)  {
   for (const paper of papers) {
     console.log(papers.length);
     for ( let j = 0; j < this.types.length + 1 ; j++)  {
       if (this.types.length === 0) {
         this.types.push(paper.type);
         j = j + 2 ;
       } else if (paper !== this.types[j]) {
        this.types.push(paper.type);
        j = j + 2;
        } else { j = j + 2; console.log('this type has been added', this.types); }
     }
   }
}
getSem(papers)  {
 for (const paper of papers) {
   console.log(papers.length);
   for ( let j = 0; j < this.semesters.length + 1 ; j++)  {
     if (this.semesters.length === 0) {
       this.semesters.push(paper.sem);
       j = j + 2 ;
     } else if (paper !== this.semesters[j]) {
      this.semesters.push(paper.sem);
      j = j + 2;
      } else { j = j + 2; console.log('this semester has been added', this.semesters); }
   }
 }
}

exportAsXLSX(set):void {
  this.service.exportAsExcelFile(set.testPapers,'DescriptiveXls');
}

}
