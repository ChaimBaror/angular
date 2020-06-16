import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { JiraffCompComponent } from './comps/jiraff-comp/jiraff-comp.component';
import { H1JiraffComponent } from './comps/jiraff-comp/h1-jiraff/h1-jiraff.component';
import { LiJiraffComponent } from './comps/jiraff-comp/li-jiraff/li-jiraff.component';
import { FooterJiraffComponent } from './comps/jiraff-comp/footer-jiraff/footer-jiraff.component';
import { RabittCompComponent } from './comps/rabitt-comp/rabitt-comp.component';
import { FooterRabComponent } from './comps/rabitt-comp/footer-rab/footer-rab.component';
import { UlRabComponent } from './comps/rabitt-comp/ul-rab/ul-rab.component';
import { H1RabComponent } from './comps/rabitt-comp/h1-rab/h1-rab.component';
import { TigerCompsComponent } from './comps/tiger-comps/tiger-comps.component';
import { H1TigComponent } from './comps/tiger-comps/h1-tig/h1-tig.component';
import { FooterTigComponent } from './comps/tiger-comps/footer-tig/footer-tig.component';
import { UlTigComponent } from './comps/tiger-comps/ul-tig/ul-tig.component';
import { CalculatorComponent } from './comps/calculator/calculator.component';
import { CalculatorResultsComponent } from './comps/calculator-results/calculator-results.component';

@NgModule({
  declarations: [
    AppComponent,
    JiraffCompComponent,
    H1JiraffComponent,
    LiJiraffComponent,
    FooterJiraffComponent,
    RabittCompComponent,
    FooterRabComponent,
    UlRabComponent,
    H1RabComponent,
    TigerCompsComponent,
    H1TigComponent,
    FooterTigComponent,
    UlTigComponent,
    CalculatorComponent,
    CalculatorResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
