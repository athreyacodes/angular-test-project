import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-example',
  templateUrl: './structural-directive-example.component.html',
  styleUrls: ['./structural-directive-example.component.css']
})
export class StructuralDirectiveExampleComponent {
  Name: string;
  Email: string;
  Address: string;

  savedData: any[] = [];


  save() {
    if (this.Name && this.Email && this.Address) {
      this.savedData.push({
        Name: this.Name,
        Email: this.Email,
        Address: this.Address,
      })
      this.clear();
    }
  }

  remove(index: number) {
    this.savedData.splice(index, 1);
  }

  clear() {
    this.Name = '';
    this.Email = '';
    this.Address = '';
  }
}
