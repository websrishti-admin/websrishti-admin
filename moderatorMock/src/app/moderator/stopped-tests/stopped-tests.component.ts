import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-stopped-tests',
  templateUrl: './stopped-tests.component.html',
  styleUrls: ['./stopped-tests.component.css']
})
export class StoppedTestsComponent implements OnInit {
  testpapers: any = [];

  constructor(public service: Service) { }

  ngOnInit(): void {
    this.getStoppedTests();
  }
  getStoppedTests() {
    this.service.getPreviousTests().subscribe((papers: any)  => {
      this.testpapers.splice(0, this.testpapers.length);

      for (const p of papers) {
        if (!p.LIVE) {
          this.testpapers.push(p);
        }

      }
      let morderator_subs = localStorage.getItem("modsub");
      console.log(morderator_subs);
      
      let selected_test_papers =[];
      this.testpapers.forEach(element => {
        if (morderator_subs.search(element.subject) >= 0) {
          console.log( element.subject + "found")
          selected_test_papers.push(element);
        } else{
          console.log( element.subject + "not found");
          
        }    
      });
      this.testpapers=selected_test_papers;
      console.log("final list testpapers");
      console.log(this.testpapers);
      console.log(this.testpapers); });
  }
  deleteExam(paperid) {
    this.service.deleteMocktest({id: paperid}).subscribe(s => {

      this.getStoppedTests();

       } );
  }
  restartExam(paperid) {
    this.service.restartMocktest({id: paperid}).subscribe(s => {

      this.getStoppedTests();

       } );
  }

  calculatHeight(d) {
    var doc = new jsPDF.jsPDF();
    let height = 80;
    
    if (d.question) {
      var splitQuestion = doc.splitTextToSize(d.question,180);
        for (let i =0; i< splitQuestion.length; i++) {
        height = height +5;
        }
    }
    if (d.diagram) {
      height = height +45;
    }
    if (d.option1) {
      height = height +15;
    }
    if (d.option2) {
      height = height +15;
    }
    if (d.option3) {
      height = height +15;
    }
    if (d.option4) {
      height = height +15;
    }
    if (d.imgOpt1) {
      height = height +45;
    }
    if (d.imgOpt2) {
      height = height +45;
    }
    if (d.imgOpt3) {
      height = height +45;
    }
    if (d.imgOpt4) {
      height = height +45;
    }
    console.log('calH :' + height)
    return height;
  }

  /*downloadPdf(testPaper) {
    let paper = [];
    this.service.getModTestPaperbyId({id:testPaper.testID}).subscribe((s: any) => {
      paper = s.testPapers;
      var doc = new jsPDF.jsPDF();
      let d_height = 15;
      doc.text('' + testPaper.examName, 85, d_height);
      d_height = d_height + 10;
      doc.text('Course:' + testPaper.course, 70, d_height);
      d_height = d_height + 10;
      doc.text('Subject:' + testPaper.subject, 70, d_height);
      d_height = d_height + 10;
      doc.text('SubCode:' + testPaper.subjectCode, 70, d_height);
      d_height = d_height + 25;
      
      
      // doc.setFontSize(10);
      for (const d of paper) {
      let q_height =  this.calculatHeight(d);
      if (q_height + d_height > 430) {
        
        doc.addPage();
        d_height = 15;
      }
  
   
      if (d.diagram) {
        const img  = 'https://expertprofessionals.org:8080/'+d.diagram;
        doc.addImage(img, 'png', 20, d_height , 40, 40 );
        d_height = d_height + 40 + 5;
      }
        
      var splitQuestion = doc.splitTextToSize(d.question,180);
      console.log(splitQuestion);
      for (let i =0; i< splitQuestion.length; i++) {
        if (i === 0) {
          doc.text((paper.indexOf(d)+ 1) + '. ' + splitQuestion[i], 10, d_height);
          d_height = d_height + 8;
        } else {
          doc.text(splitQuestion[i], 10, d_height);
          d_height = d_height + 8;
        }
       
      }
  
        if (d.imgOpt1) {
          doc.text('[i]', 10,d_height );
          const img  = 'https://expertprofessionals.org:8080/'+d.imgOpt1; 
          doc.addImage(img, 'png', 20, d_height , 40, 40 );
          d_height = d_height + 40 + 5;
        } else if (d.option1) {
          doc.text('[i]' + d.option1, 10, d_height);
          d_height = d_height + 15;
        }
        
        if (d.imgOpt2) {
          doc.text('[ii]', 10,d_height );
          const img  = 'https://expertprofessionals.org:8080/'+d.imgOpt2;
          doc.addImage(img, 'png', 20, d_height , 40, 40 );
          d_height = d_height + 40 + 5;
        } else if (d.option2) {
          doc.text('[ii]' + d.option2, 10,  d_height);
          d_height = d_height + 15;
        } 
        if (d.imgOpt3) {
          doc.text('[iii]', 10,d_height );
          const img  = 'https://expertprofessionals.org:8080/'+d.imgOpt3;
          doc.addImage(img, 'png', 20, d_height , 40, 40 );
          d_height = d_height + 40 + 5;
        } else if (d.option3) {
          doc.text('[iii]' + d.option3, 10,  d_height);
          d_height = d_height + 15;
        }
        if (d.imgOpt4) {
          doc.text('[iv]', 10,d_height );
          const img  = 'https://expertprofessionals.org:8080/'+d.imgOpt4;
          doc.addImage(img, 'png', 20, d_height , 40, 40 );
          d_height = d_height + 40 + 5;
        } else if (d.option4) {
          doc.text('[iv]' + d.option4, 10,  d_height);
          d_height = d_height + 15;
        }
                 
       }    
      doc.save('pdf')
    })
  }*/

}
