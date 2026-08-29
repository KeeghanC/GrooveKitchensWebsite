import { Component } from '@angular/core';
import { certificatesAndCompliances } from '../constants/compliance-and-certificates.consts';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  certificatesAndCompliances = certificatesAndCompliances;
}
