import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Service } from 'src/app/services/REST';
import { InstructionSetComponent } from './instruction-set/instruction-set.component';
import { QuestionOverViewComponent } from './question-over-view/question-over-view.component';

@Component({
  selector: 'app-view-paper',
  templateUrl: './view-paper.component.html',
  styleUrls: ['./view-paper.component.css']
})
export class ViewPaperComponent implements OnInit {
  paper: any;
  live = false;
  i = 0;
  question: any;
  dataDisplay: any;



  constructor(public service: Service, public dialog: MatDialog, public dia: MatDialog) { }

  ngOnInit(): void {
    this.ViewPaper();

  }
  prev(){
    this.i = this.i - 1;
    this.dataDisplay = this.question[this.i];
  }
  next(){
    this.i = this.i + 1;
    this.dataDisplay = this.question[this.i];
    console.log("Question")
    console.log(this.dataDisplay);

  }
  goto( n: number){
    this.i = n;
    this.dataDisplay = this.question[this.i];
  }
  choose( n: number){
    this.question[this.i][5] = '' + n + ' ';
  }

  ViewPaper() {
    this.paper = this.service.viewPaper;
    this.question = this.service.viewPaper.testPapers;
    this.dataDisplay = this.question[this.i];
    console.log("viewpaperfunction",this.paper);
  }

  startExam() {
    console.log("start exam"+this.paper.descType)

    if (this.paper.mcq) {

      this.service.startMockTest({
        examName: this.paper.examName,
        id: this.paper._id,
        teacher: this.paper.teacher,
        totalMarks: this.paper.totalMarks,
        subject: this.paper.subject,
        subCode: this.paper.subjectCode,
        year: this.paper.type,
        stream: this.paper.stream,
        sem: this.paper.sem,
        course: this.paper.course,
        timer: this.paper.timer,
        mcq: true,
        desc: false,
        descType: null,
        instruction: this.paper.instruction
  
       }).subscribe(test => {
         if (!test) {
           alert('something went wrong');
         } else {
           this.live = true;
           console.log("subscibe"+test);
           alert('This exam is LIVE now');
         }
       });
      
    } else {
      console.log('PDF:'+this.paper.descType)
      
    this.service.startMockTest({
      id: this.paper._id,
      examName: this.paper.examName,
      teacher: this.paper.teacher,
      totalMarks: this.paper.totalMarks,
      subject: this.paper.subject,
      subCode: this.paper.subjectCode,
      year: this.paper.type,
      stream: this.paper.stream,
      sem: this.paper.sem,
      course: this.paper.course,
      timer: this.paper.timer,
      mcq: false,
      desc: true,
      descType: this.paper.descType,
      instruction: this.paper.instruction

     }).subscribe(test => {
       if (!test) {
         alert('something went wrong');
       } else {
         this.live = true;
         console.log("log test"+test);
         alert('This exam is LIVE now');
       }
     });
    }
  }

  openPaper(){
    const dialogRef = this.dialog.open(QuestionOverViewComponent, {height: '100%' ,width:'100%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  instruct(){
    const diagRef = this.dia.open(InstructionSetComponent, {height: '100%' ,width:'100%'});

    diagRef.afterClosed().subscribe(result => {
      console.log(`Dia result: ${result}`);
    });
  }

}
