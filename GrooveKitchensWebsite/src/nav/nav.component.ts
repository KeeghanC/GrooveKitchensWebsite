import { Component } from '@angular/core';
import { NAV_CONTENT } from '../constants/nav-content.const';
import { HamburgerComponent } from "./hamburger/hamburger.component";
import { WindowSizeService } from '../app-services/window-size.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { contactDetails, mobileOneWord } from '../constants/contact-details.consts';
import { PHONE_HREF } from '../constants/phone-href.const';

@Component({
    selector: 'app-nav',
    imports: [HamburgerComponent],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
  nav = NAV_CONTENT;

  phoneHref = PHONE_HREF;

  // Default to on
  showLinks = true;

  isLargeScreen = false;

  constructor(private readonly windowSizeService: WindowSizeService, readonly router: Router) {
    this.windowSizeService.windowSize$.pipe(takeUntilDestroyed()).subscribe((size) => {
      this.showLinks = size.width > 900;
      this.isLargeScreen = size.width > 900;
    });
  }

  toggleSideav() {
    this.showLinks = !this.showLinks;
  }
}
