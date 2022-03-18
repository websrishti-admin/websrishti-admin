import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';

@Component({
  selector: 'app-instruction-set',
  templateUrl: './instruction-set.component.html',
  styleUrls: ['./instruction-set.component.css']
})
export class InstructionSetComponent implements OnInit {
  paper: any;

  constructor(public service: Service) { }

  ngOnInit(): void {
    this.ViewPaper();
  }

  ViewPaper() {
    this.paper = this.service.viewPaper;
  }

}
