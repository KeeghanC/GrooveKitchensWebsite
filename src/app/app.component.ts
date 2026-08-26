import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [NavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly title = 'Groove Kitchens | Kitchen Design & Renovations Auckland';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}
  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    // Add meta tags
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Groove Kitchens designs and renovates practical, beautiful kitchens across Auckland.',
      },
      {
        name: 'keywords',
        content:
          'Groove Kitchens, Auckland kitchens, kitchen design, kitchen renovation, custom cabinetry',
      },
      { name: 'author', content: 'Groove Kitchens' },
      { property: 'og:title', content: 'Groove Kitchens' },
      {
        property: 'og:description',
        content: 'Thoughtful kitchen design, cabinetry, and renovations across Auckland.',
      },
      { property: 'og:type', content: 'website' },
    ]);

    this.metaService.addTag({ rel: 'canonical', href: 'https://groovekitchens.netlify.app' }, true);
  }
}
