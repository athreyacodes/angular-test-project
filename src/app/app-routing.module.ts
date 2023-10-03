import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModelExampleComponent } from './ng-model-example/ng-model-example.component';
import { StructuralDirectiveExampleComponent } from './structural-directive-example/structural-directive-example.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'model', component: NgModelExampleComponent},
  { path: 'directive', component: StructuralDirectiveExampleComponent},
  { path: 'template', component: TemplateDrivenFormsComponent},
  { path: 'reactive', component: ReactiveFormExampleComponent},
  { path: '*', pathMatch: 'full', redirectTo: '/home'},
  { path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
