import { TestBed } from '@angular/core/testing';
import { WindowSizeService } from './window-size.service';

describe('WindowSizeService', () => {
  it('reports the current browser viewport', () => {
    const service = TestBed.inject(WindowSizeService);
    let currentSize = { width: 0, height: 0 };

    const subscription = service.windowSize$.subscribe((size) => {
      currentSize = size;
    });

    expect(currentSize.width).toBe(window.innerWidth);
    expect(currentSize.height).toBe(window.innerHeight);
    subscription.unsubscribe();
  });

  it('updates when the browser is resized', () => {
    const service = TestBed.inject(WindowSizeService);
    let currentWidth = 0;
    const subscription = service.windowSize$.subscribe((size) => {
      currentWidth = size.width;
    });
    const originalWidth = window.innerWidth;

    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 640 });
    window.dispatchEvent(new Event('resize'));

    expect(currentWidth).toBe(640);

    Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalWidth });
    window.dispatchEvent(new Event('resize'));
    subscription.unsubscribe();
  });
});
