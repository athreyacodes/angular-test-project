import { AbstractControl, ValidationErrors } from "@angular/forms";

export class alphabetOnly {
    static alphabetOnlyValidations(control: AbstractControl): ValidationErrors | null {
        let result = /[^a-zA-Z ]/i.test(control.value);
        return result ? { alphabetOnly: true } : null;
    }
} 