import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { heroContent } from '../constants/hero.const';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  hero = heroContent;
}
