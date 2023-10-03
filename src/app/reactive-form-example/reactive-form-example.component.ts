import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormArray, FormBuilder } from "@angular/forms";
import { alphabetOnly } from '../form-validators';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent {

  form: FormGroup;

  get Name(): AbstractControl {
    return this.form.get('Name') as AbstractControl;
  }

  get Email(): AbstractControl {
    return this.form.get('Email') as AbstractControl;
  }
  get Mobile(): AbstractControl {
    return this.form.get('Contact.Mobile') as AbstractControl;
  }

  get Skills(): FormArray {
    return this.form.get('Skills') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    // this.form = new FormGroup({
    //   Name: new FormControl('', [Validators.required]),
    //   Email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,}$')]),

    //   Contact: new FormGroup({
    //     Address: new FormControl(),
    //     Mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10,10}$')])
    //   }),

    //   Skills: new FormArray([])
    // });

    this.form = fb.group({
      Name: ['', [Validators.required, alphabetOnly.alphabetOnlyValidations]],
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,}$')]],
      Contact: fb.group({
        Address: [''],
        Mobile: ['', [Validators.required, Validators.pattern('[0-9]{10,10}$')]]
      }),
      Skills: fb.array([])
    });    
  }

  submit() {
    console.log(this.form.value);
  }

  addSkill(skill: any) {
    if (!skill?.value) return;

    this.Skills.push(new FormControl(skill.value));
    skill.value = '';
    console.log(this.form.value);

  }

  removeSkill(index: number) {
    this.Skills.removeAt(index);
  }

  // formControlChanged(control: any) {
  //   console.log(control)
  // }
}
