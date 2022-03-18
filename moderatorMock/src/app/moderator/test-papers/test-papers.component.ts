import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/REST';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-test-papers',
  templateUrl: './test-papers.component.html',
  styleUrls: ['./test-papers.component.css']
})
export class TestPapersComponent implements OnInit {
  testpapers: any;
  liveTestPapers: any;
  x: number= 0;
  y: number= 0;

  constructor(public service: Service, public router: Router) { }

  ngOnInit(): void {
    this.getTestPapers();
    console.log("testpapers_get test paper function");
      console.log(this.testpapers);
  }
  getLiveTestPapers(testPapers) {
     const tPaper = [];
     this.service.getPreviousTests().subscribe((t: any) => {
       this.liveTestPapers = t;
       // tslint:disable-next-line:prefer-for-of
       if (t.length === 0) {
        this.testpapers = testPapers;
        
       } else {
         // tslint:disable-next-line:prefer-for-of
       for (let l = 0; l < testPapers.length; l++) {
         for (let j = 0; j < t.length; j++) {
            if (testPapers[l]._id === t[j].testID ) {
              j = t.length;
             } else  {
               if (j === t.length - 1) {
               tPaper.push(testPapers[l]);
               this.testpapers = tPaper;
               
               j = t.length;
               }
             }
           }


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

     });

  }

  getTestPapers() {
    this.service.getTestPaperBankMod().subscribe((set: any) => {
      // this.testpapers = set;
      // console.log(this.testpapers);
      this.getLiveTestPapers(set);
      

    });
  }
  viewPaper(set) {
    this.service.viewPaper = set;
   
    this.router.navigate(['/viewPaper']);
   
  }
  removePaper(paperId) {

    this.service.deleteTestPaper({id: paperId}).subscribe(s => { this.getTestPapers(); });
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



  /*downloadPdf(paper) {
    var doc = new jsPDF.jsPDF();
    let d_height = 15;
    doc.text('' + paper.examName, 85, d_height);
    d_height = d_height + 10;
    doc.text('Course:' + paper.course, 70, d_height);
    d_height = d_height + 10;
    doc.text('Subject:' + paper.subject, 70, d_height);
    d_height = d_height + 10;
    doc.text('SubCode:' + paper.subjectCode, 70, d_height);
    d_height = d_height + 25;
    
    
    // doc.setFontSize(10);
    for (const d of paper.testPapers) {
    let q_height =  this.calculatHeight(d);
    console.log(q_height + d_height);
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
      for (let i =0; i< splitQuestion.length; i++) {
        if (i === 0) {
          doc.text((paper.testPapers.indexOf(d)+ 1) + '. ' + splitQuestion[i], 10, d_height); 
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
    doc.save('pdf')*/
  }

