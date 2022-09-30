import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./main/home/home.component";
import {QuestionsComponent} from "./main/questions/questions.component";
import {QuestionsSecondPartComponent} from "./main/questions-second-part/questions-second-part.component";
import {QuestionsThirdPartComponent} from "./main/questions-third-part/questions-third-part.component";
import {QuestionsForthPartComponent} from "./main/questions-forth-part/questions-forth-part.component";
import {ThanksComponent} from "./main/thanks/thanks.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'questions-part-two', component: QuestionsSecondPartComponent},
  {path: 'questions-part-three', component: QuestionsThirdPartComponent},
  {path: 'questions-part-four', component: QuestionsForthPartComponent},
  {path: 'thanks', component: ThanksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
