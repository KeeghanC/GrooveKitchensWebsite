import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { testimonials } from './testimonial/testimonial.const';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  public readonly testimonials = testimonials;

  interval: number = 15000; // 15s
  currentIndex = 0;
  timeElapsed = 0;

  private autoTimer: any;
  private progressTimer: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoScroll();
      this.startProgress();
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.autoTimer);
    clearInterval(this.progressTimer);
  }

  startAutoScroll(): void {
    this.autoTimer = setInterval(() => this.next(), this.interval);
  }

  startProgress(): void {
    this.progressTimer = setInterval(() => {
      this.timeElapsed += 100;
      if (this.timeElapsed >= this.interval) {
        this.timeElapsed = 0;
      }
    }, 100);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.resetProgress();
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetProgress();
  }

  private resetProgress(): void {
    this.timeElapsed = 0;
    clearInterval(this.progressTimer);
    clearInterval(this.autoTimer);
    this.startProgress();
    this.startAutoScroll();
  }
}
