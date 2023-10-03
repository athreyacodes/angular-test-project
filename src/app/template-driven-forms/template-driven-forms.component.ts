import { Component } from '@angular/core';
import { NgForm, FormControl} from "@angular/forms";

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {


  submit(f: NgForm) {
    console.log(f.value);
  }

  formControlChanged(control: any) {
    console.log(control)
  }
}
