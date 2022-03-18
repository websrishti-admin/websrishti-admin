import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/REST';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-descriptive-set',
  templateUrl: './descriptive-set.component.html',
  styleUrls: ['./descriptive-set.component.css']
})
export class DescriptiveSetComponent implements OnInit {
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

  @ViewChild('descTable') userTable: ElementRef;

  constructor(public service: Service, public route: Router) { }

  ngOnInit(): void {
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
    this.getPapers(s);
  }

  getPapers(s) {
    console.log({
      course : s.course,
      sem: s.sem,
      type: s.type,
      sub: s.subject,
      subCode: s.subCode
    });
    this.service.getDescPaperBank({
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
    console.log(paper);
    this.route.navigate(['/viewdescriptiveSet']);
  }

  exportAsXLSX(set):void {
    this.service.exportAsExcelFile(set.testPapers,'DescriptiveXls');
  }
  


}
