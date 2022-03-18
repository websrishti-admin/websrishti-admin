import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';

@Component({
  selector: 'app-view-diagram-set',
  templateUrl: './view-diagram-set.component.html',
  styleUrls: ['./view-diagram-set.component.css']
})
export class ViewDiagramSetComponent implements OnInit {
  diagramPaper: any = [];
  selectedDiagram: any = [];
  qModel: any;
  moderator: any;

  constructor(public service: Service) { }

  ngOnInit(): void {
    this.diagramPaper  = this.service.diagramPaper ;
    console.log(this.diagramPaper);
    console.log(this.diagramPaper.diagram);
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
      this.selectedDiagram.push(q);
      console.log(this.selectedDiagram);
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.selectedDiagram.length ; i++) {
        if (q._id === this.selectedDiagram[i]._id) {
          this.selectedDiagram.splice(i, 1);
          console.log(this.selectedDiagram);
        }
      }
     }

  }
  submit() {
    const paperTemp = []
    for (const q of this.selectedDiagram) {

      paperTemp.push({
        marks: q.marks,
        inde: q.index,
        question: q.question,
        option1: q.option1,
        option2: q.option2,
        option3: q.option3,
        option4: q.option4,
        answer: q.answer,

        file: q.diagram,

        imgOpt1: q.imgOpt1,

        imgOpt2: q.imgOpt2,

        imgOpt3: q.imgOpt3,

        imgOpt4: q.imgOpt4,

        imgAnswer: q.imgAnswer
      })

      if (this.selectedDiagram.length === paperTemp.length) {
        console.log(this.selectedDiagram.length, paperTemp.length);
        this.service.pushSelectedQuetions({id: this.moderator._id, paper: paperTemp}).subscribe(set => { console.log(set); });
        alert('Ready To Finalise The Paper');
      } else {
        console.log(this.selectedDiagram.length, paperTemp.length);
      }
    }
    alert('Ready To Finalise The Paper');
  }

}
