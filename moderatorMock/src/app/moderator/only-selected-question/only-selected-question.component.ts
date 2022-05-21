import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-only-selected-question',
  templateUrl: './only-selected-question.component.html',
  styleUrls: ['./only-selected-question.component.css']
})
export class OnlySelectedQuestionComponent implements OnInit {
  questionSet: any;
  subject: any;
  type: any;
  teacher: string;
  moderator: any;
  course: string;
  stream: string;
  totalMarks = 0;
  timer: number;
  sem: any;
  q:any;
  subjects: any;
  examType: any;
  examName: any;
  descType : string;
  instruction: string;
  //constructor(public service: Service) { }
  diagramPaper: any = [];
  selectedDiagram: any = [];
  qModel: any;
  varyi: any;
  //moderator: any;
  

  constructor(public service: Service) { }

  ngOnInit(): void {
    this.diagramPaper  = this.service.diagramPaper ;
    //console.log(this.diagramPaper);
    //console.log(this.diagramPaper);
    //this.varyi=this.diagramPaper.diagram
    this.getModerator();
    //console.log("test1",this.varyi)
    
    
  }
  /*getModerator() {
    const Tid = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getModById({userId: Tid}).subscribe((t: any) => {
      this.moderator = t[0];
      console.log(this.moderator);
    });
  }*/
  /*ngOnInit(): void {
    //this.getQuestions();
    this.getModerator();
    //this.calTotalMarks();
  }*/

  getQuestions() {

    this.service.getExamQSetMod().subscribe(set => {
      console.log('within getQuestions function');
      this.questionSet = set;
      console.log(this.questionSet);
      
    });
  }
  submit(){
    console.log(this.descType)
    if (this.examType === 'MCQ') {

      this.service.setExamPaperModerator({
        examName: this.examName,
        id: this.moderator._id,
        teacher: this.teacher,
          sub: this.subject.subject,
          subCode: this.subject.subCode,
          type: this.type,
          sem: this.sem,
          stream:  this.stream,
          course: this.course,
          totalMarks: this.totalMarks,
          timer: this.timer,
          mcq: true,
          desc: false,
          descType: null,
          instruction: this.instruction
      }).subscribe(set => {
        if (!set) {
          alert('failed');
        } else {
          console.log(set);
          alert('TestPaper is ready. Check Test-Paper-Bank');
        }
      });
      
    } else {
      
      this.service.setExamPaperModerator({
        id: this.moderator._id,
        examName: this.examName,
        teacher: this.teacher,
          sub: this.subject.subject,
          subCode: this.subject.subCode,
          type: this.type,
          sem: this.sem,
          stream:  this.stream,
          course: this.course,
          totalMarks: this.totalMarks,
          timer: this.timer,
          mcq: false,
          desc: true,
          descType: this.descType,
          instruction: this.instruction
      }).subscribe(set => {
        if (!set) {
          alert('failed');
        } else {
          console.log(set);
          alert('TestPaper is ready. Check Test-Paper-Bank');
        }
      });


    }


    
  }
  getModerator() {
    const Tid = JSON.parse(localStorage.getItem('moderatorId'));
    this.service.getModById({userId: Tid}).subscribe((t: any) => {
      this.moderator = t[0];
      this.subjects = t[0].subjects;
      console.log("getmoderatorlog",this.moderator);
      this.questionSet = this.moderator.selectedQuestions;
      this.calTotalMarks();
      console.log("Question set");
      console.log(this.questionSet);
      
      
    });
  }
  calTotalMarks() {
    let i = 0;
    for (const q of this.questionSet) {
      i = i + q.marks;
    }
    this.totalMarks = i;
    console.log("marks",i);
  }


  selectDetails(s) {
    // console.log(s);
    this.course = s.course;
    this.sem = s.sem;
    this.type = s.year;
    this.stream = s.stream;
    console.log("select",{
      course : s.course,
      sem: s.sem,
      type: s.year,
      stream: s.stream,
      subCode: s.subCode
    });
  }
 

}
