import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModelExampleComponent } from './ng-model-example/ng-model-example.component';
import { StructuralDirectiveExampleComponent } from './structural-directive-example/structural-directive-example.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NgModelExampleComponent,
    StructuralDirectiveExampleComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormExampleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
