import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';

@Component({
  selector: 'app-result-sheet',
  templateUrl: './result-sheet.component.html',
  styleUrls: ['./result-sheet.component.css']
})
export class ResultSheetComponent implements OnInit {
  answers: any;

  constructor(public service: Service) { }

  ngOnInit(): void {
   this.answers = this.service.answerSheet.answers;

  }

}
