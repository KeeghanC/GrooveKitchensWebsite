import { Component } from '@angular/core';
import { heroContent } from '../constants/hero.const';
import { PHONE_HREF } from '../constants/phone-href.const';

@Component({
    selector: 'app-hero',
    imports: [],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
  hero = heroContent;

  phoneHref = PHONE_HREF;
}
