import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http' ;
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


const EXCEL_EXTENSION = '.xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';


@Injectable()
export class Service {
    qustionSet: any[];
    viewPaper: any;
    examSheet: any;
    diagramPaper: any  = [];
    answerSheet: any;
    instructionSet: any;
    port = 'https://expertprofessionals.org:8080';
    // port = 'https://mockt-backend.herokuapp.com';
    // port = 'https://server.eiilm.co.in:3000';
    // port = 'http://localhost:3000';
    constructor(public http: HttpClient) {}

    public exportAsExcelFile(json: any[], excelFileName: string): void {
    
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
      }
      private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      }

    // AUTHENTICATION
    signIn(user) {
        return this.http.post(this.port + '/moderator/signIn', user);
    }

    createAccount(user) {
        return this.http.post(this.port + '/createAccount', user);
    }

    UpdatePassword(user) {
        return this.http.post(this.port + '/moderator/upPass', user);
    }

    getUsers() {
        return this.http.get(this.port + '/getUsers');
    }

    getUserById(id) {
        return this.http.post(this.port + '/getUserById', id);
    }

    getModById(id) {
        return this.http.post(this.port + '/moderator/getModById',  id);
    }

    // teacher


    getPreviousTests() {
        return this.http.get(this.port + '/getPreviousTests');
    }

    getTestPaperById(set) {
        return this.http.post(this.port + '/getTestPaperById', set);
    }
    uploadQuestionSet(set) {
        return this.http.post(this.port + '/uploadQuestion/', set);
    }
    getAllQuestions() {
        return this.http.get(this.port + '/questionSet/');
    }
    uploadSelectedQuestion(set) {
        return this.http.post(this.port + '/setAQuestionPaper/', set);
    }
    getTestPaper() {
        return this.http.get(this.port + '/getTestPaper/');
    }
    getModTestPaperbyId(id) {
        return this.http.post(this.port + '/moderator/getModTPbyId/', id);
    }
    getTestPaperMderator(set) {
        return this.http.post(this.port + '/moderator/getTestPaper/', set);
    }
    getDiagramPaperBank(set) {
        return this.http.post(this.port + '/moderator/getDiagramTestPaper/', set);
    }

    getDescPaperBank(set) {
        return this.http.post(this.port + '/moderator/getDescTestPaper/', set);
    }

    setGoogleForm(set) {
        // tslint:disable-next-line:max-line-length
        return this.http.post(this.port + 'https://script.google.com/macros/s/AKfycbwTE9Xcdq16TpJ_qXoT1DWvgIFRir2ThisjPXZByvwmP3rx9dwy/exec', set, {
            headers : new HttpHeaders().
            set('Access-Control-Allow-Origin', '*').
            append('Access-Control-Allow-Headers', ['X-Requested-With', 'content-type', 'Authorization']).
            append('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'])
            // set('Access-Control-Allow-Headers',
            // ['*', 'Origin' , 'post' , 'X-Requested-With', 'Content-Type', 'Accept'])
        });
    }
    createTestPaper(set) {
        return this.http.post(this.port + '/setTestPaperForm/', set);
    }
    getTestPaperBank() {
        return this.http.get(this.port + '/getTestBank/');
    }
    deleteAllq() {
        return this.http.get(this.port + '/deleteAllq');
    }
    startMockTest(set) {
        return this.http.post(this.port + '/moderator/startExam', set);
    }
    stopMocktest(id) {
        return this.http.post(this.port + '/moderator/stopExam', id);
    }
    restartMocktest(id) {
        return this.http.post(this.port + '/moderator/restartExam', id);
    }
    deleteMocktest(id) {
        return this.http.post(this.port + '/moderator/delLiveExam', id);
    }
    selectQuestionsModerator(set) {
        return this.http.post(this.port + '/examSheetMod', set);
    }
    setExamPaperModerator(set) {
        return this.http.post(this.port + '/moderator/setFinalTestPaper', set);
    }
    getTestPaperBankMod() {
        return this.http.get(this.port + '/getTestBankModerator');
    }
    getExamQSetMod() {
        return this.http.get(this.port + '/getExamSheetMod');
    }

    getDiagramSet()  {
        return this.http.get(this.port + '/teacher/getDiagramSet');
    }
    deleteTestPaper(id) {
        return this.http.post(this.port + '/moderator/deleteTestPaper',  id);
    }
    pushSelectedQuetions(set) {
        return this.http.post(this.port + '/moderator/pushSelQuestionsMod',  set);
    }
    getAns() {
        return this.http.get(this.port + '/moderator/getAnswer');
    }
    deleteResult(id) {
        return this.http.post(this.port + '/moderator/deleteResult', id);
    }
    getResultBySubject(set) {
        return this.http.post(this.port + '/moderator/getAnswerBySbject', set);
    }



}
