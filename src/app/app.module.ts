import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import {HomeModule} from "./main/home/home.module";
import {QuestionsModule} from "./main/questions/questions.module";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuestionsSecondPartComponent } from './main/questions-second-part/questions-second-part.component';
import { QuestionsThirdPartComponent } from './main/questions-third-part/questions-third-part.component';
import { QuestionsForthPartComponent } from './main/questions-forth-part/questions-forth-part.component';
import { ThanksComponent } from './main/thanks/thanks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsSecondPartComponent,
    QuestionsThirdPartComponent,
    QuestionsForthPartComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    QuestionsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
