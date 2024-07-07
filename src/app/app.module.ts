import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ObservbleSubjectComponent } from './angular-topics/observble-subject/observble-subject.component';
import { AsyncPipeComponent } from './angular-topics/async-pipe/async-pipe.component';
import { AppComponent } from './app.components';
import { DatePipe } from '@angular/common';
import { TemplateDrivenFormsComponent } from './angular-topics/template-driven-forms/template-driven-forms.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ObservbleSubjectComponent,
    AsyncPipeComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
