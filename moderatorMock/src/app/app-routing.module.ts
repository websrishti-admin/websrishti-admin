import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeratorHomeComponent } from './moderator/moderator-home/moderator-home.component';
import { QuestionSetComponent } from './moderator/question-set/question-set.component';
import { StudentsComponent } from './moderator/students/students.component';
import { SelectQuestionComponent } from './moderator/select-question/select-question.component';
import { OnlySelectedQuestionComponent } from './moderator/only-selected-question/only-selected-question.component';
import { TestPapersComponent } from './moderator/test-papers/test-papers.component';
import { ViewPaperComponent } from './moderator/view-paper/view-paper.component';
import { DiagramSetComponent } from './diagram-set/diagram-set.component';
import { ViewDiagramSetComponent } from './diagram-set/view-diagram-set/view-diagram-set.component';
import { LiveTestsComponent } from './moderator/live-tests/live-tests.component';
import { StoppedTestsComponent } from './moderator/stopped-tests/stopped-tests.component';
import { ResultsComponent } from './moderator/results/results.component';
import { ResultSheetComponent } from './moderator/results/result-sheet/result-sheet.component';
import { DescriptiveSetComponent } from './moderator/descriptive-set/descriptive-set.component';
import { ViewDescSetComponent } from './moderator/descriptive-set/view-desc-set/view-desc-set.component';
import { ProfileComponent } from './moderator/profile/profile/profile.component';
import { EditComponent } from './moderator/profile/edit/edit.component';


const routes: Routes = [
  { path: '', component: QuestionSetComponent },
  { path: 'allStudents' , component: StudentsComponent },
  { path: 'selectQuestions', component: SelectQuestionComponent },
  { path: 'allSelectedQuestion', component:  OnlySelectedQuestionComponent},
  { path: 'testPapers', component: TestPapersComponent},
  { path: 'viewPaper', component: ViewPaperComponent},
  { path: 'diagramSet', component: DiagramSetComponent},
  { path: 'descriptiveSet', component: DescriptiveSetComponent},
  { path: 'viewdescriptiveSet', component: ViewDescSetComponent},
  { path: 'viewDiagramSet', component: ViewDiagramSetComponent},
  { path: 'liveTests', component: LiveTestsComponent},
  { path: 'stoppedTests', component: StoppedTestsComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'result-sheet', component: ResultSheetComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
