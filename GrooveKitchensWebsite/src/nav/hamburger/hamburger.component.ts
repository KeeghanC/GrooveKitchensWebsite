import { Component, output } from '@angular/core';

@Component({
    selector: 'app-hamburger',
    imports: [],
    templateUrl: './hamburger.component.html',
    styleUrl: './hamburger.component.scss'
})
export class HamburgerComponent {
  readonly pressed = output();

  onClick() {
    this.pressed.emit();
  }
}
