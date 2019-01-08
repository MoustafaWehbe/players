import { Component } from '@angular/core';

/**
 * Generated class for the PlayermodalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'playermodal',
  templateUrl: 'playermodal.html'
})
export class PlayermodalComponent {

  text: string;

  constructor() {
    console.log('Hello PlayermodalComponent Component');
    this.text = 'Hello World';
  }

}
