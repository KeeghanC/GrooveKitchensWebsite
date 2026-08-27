import { Component } from '@angular/core';
import { NAV_CONTENT } from '../constants/nav-content.const';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { WindowSizeService } from '../app-services/window-size.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PHONE_HREF } from '../constants/phone-href.const';
import { contactDetails } from '../constants/contact-details.consts';

@Component({
  selector: 'app-nav',
  imports: [HamburgerComponent, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  nav = NAV_CONTENT;

  showLinks = false;

  isLargeScreen = false;

  phoneHref = PHONE_HREF;

  phoneNumber = contactDetails.mobileNumber;

  constructor(private readonly windowSizeService: WindowSizeService) {
    this.windowSizeService.windowSize$.pipe(takeUntilDestroyed()).subscribe((size) => {
      this.showLinks = size.width > 900;
      this.isLargeScreen = size.width > 900;
    });
  }

  toggleSidebar() {
    this.showLinks = !this.showLinks;
  }

  closeSidebarOnNavigation() {
    if (!this.isLargeScreen) {
      this.showLinks = false;
    }
  }
}
