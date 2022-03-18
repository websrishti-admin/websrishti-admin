import { Component, OnInit } from '@angular/core';
import { Service } from '../services/REST';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagram-set',
  templateUrl: './diagram-set.component.html',
  styleUrls: ['./diagram-set.component.css']
})
export class DiagramSetComponent implements OnInit {
  diagramBank: any = [];
  subjects: any =  [];
  types: any =  [];
  semesters: any =  [];
  subject: any;
  type: any;
  sem: any;
  moderator: any;
  course: any;
  stream: any;

  constructor(public service: Service, public router: Router) { }

  ngOnInit(): void {
    // this.getDiagramBank();
    this.getModerator();
  }
  getModerator() {
    const Tid = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getModById({userId: Tid}).subscribe((t: any) => {
      this.moderator = t[0];
      this.subjects = t[0].subjects;
      // console.log(this.subjects);

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
    this.getDiagramBank();
  }


  getDiagramBank(){
    this.service.getDiagramPaperBank({
      course : this.subject.course,
      sem: this.subject.sem,
      type: this.subject.year,
      sub: this.subject.subject,
      subCode: this.subject.subCode,
      stream: this.subject.stream,
      
    }).subscribe(d => {
      this.diagramBank = d;
      console.log("get diagram");
      console.log(this.diagramBank);
    });
  }
  viewDiagramPaper(evt) {
    this.service.diagramPaper = evt;
    this.router.navigate(['/viewDiagramSet']);
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
}
