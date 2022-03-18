import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ModeratorHomeComponent } from './moderator/moderator-home/moderator-home.component';
import { QuestionSetComponent } from './moderator/question-set/question-set.component';
import { TestPapersComponent } from './moderator/test-papers/test-papers.component';
import { StudentsComponent } from './moderator/students/students.component';
import { TeachersComponent } from './moderator/teachers/teachers.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule, MatTable} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

import { Service } from './services/REST';
import { MaterialModule } from './material';
import { SelectQuestionComponent } from './moderator/select-question/select-question.component';
import { OnlySelectedQuestionComponent } from './moderator/only-selected-question/only-selected-question.component';
import { ViewPaperComponent } from './moderator/view-paper/view-paper.component';
import { DiagramSetComponent } from './diagram-set/diagram-set.component';
import { ViewDiagramSetComponent } from './diagram-set/view-diagram-set/view-diagram-set.component';
import {MatMenuModule} from '@angular/material/menu';
import { LiveTestsComponent } from './moderator/live-tests/live-tests.component';
import { StoppedTestsComponent } from './moderator/stopped-tests/stopped-tests.component';
import { ResultsComponent } from './moderator/results/results.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { ResultSheetComponent } from './moderator/results/result-sheet/result-sheet.component';
import { DescriptiveSetComponent } from './moderator/descriptive-set/descriptive-set.component';

import { ViewDescSetComponent } from './moderator/descriptive-set/view-desc-set/view-desc-set.component';
import { EditComponent } from './moderator/profile/edit/edit.component';
import { ProfileComponent } from './moderator/profile/profile/profile.component';
import { InstructionSetComponent } from './moderator/view-paper/instruction-set/instruction-set.component';
import { QuestionOverViewComponent } from './moderator/view-paper/question-over-view/question-over-view.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ModeratorHomeComponent,
    QuestionSetComponent,
    TestPapersComponent,
    StudentsComponent,
    TeachersComponent,
    MainNavComponent,
    SelectQuestionComponent,
    OnlySelectedQuestionComponent,
    ViewPaperComponent,
    DiagramSetComponent,
    ViewDiagramSetComponent,
    LiveTestsComponent,
    StoppedTestsComponent,
    ResultsComponent,
    SubjectEditComponent,
    ResultSheetComponent,
    DescriptiveSetComponent,
    ViewDescSetComponent,
    EditComponent,
    ProfileComponent,
    InstructionSetComponent,
    QuestionOverViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
    MatMenuModule,
    MatChipsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
