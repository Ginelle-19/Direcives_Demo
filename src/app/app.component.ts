import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'This is an activity about DIRECTIVES';
  clientName: string = 'Andrew';

  appliedCSSClass = 'green';
  notappliedCSSClass = false;
  myColor = 'red';

  //Event binding

  message = '';

  onButtonClick() {
    this.message = 'File is saved!';
  }

  //Event as an alert()
  showAlert() {
    alert('You dowloaded the file!');
  }

  // for two-way data binding demo
  myName = '';

  //ngIf Demo
  showElement = false;

  //ngFor Demo
  items = ['Apple', 'Banana', 'Carrots'];

  //ngSwitch
  selectedOption = 3;

  //ngStyle
  color = '#ffaa80';

  //ngClass
  isBold = true;
  isItalic = true;

  //ngModel
  name = '';
}
