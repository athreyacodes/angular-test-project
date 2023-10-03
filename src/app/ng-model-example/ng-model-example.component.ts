import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model-example',
  templateUrl: './ng-model-example.component.html',
  styleUrls: ['./ng-model-example.component.css']
})
export class NgModelExampleComponent {
  PostTitle: string;
  PostDescription: string;
  ImageUrl: string;
  MoreDetailsUrl: string;
  AddBackground: string;
}
