import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { distinctUntilChanged, fromEvent, map, Observable, of, shareReplay, startWith } from 'rxjs';

export interface WindowSize {
  width: number;
  height: number;
}

@Injectable({ providedIn: 'root' })
export class WindowSizeService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly windowSize$: Observable<WindowSize> = isPlatformBrowser(this.platformId)
    ? fromEvent(window, 'resize').pipe(
        startWith(null),
        map(() => ({ width: window.innerWidth, height: window.innerHeight })),
        distinctUntilChanged(
          (previous, current) =>
            previous.width === current.width && previous.height === current.height,
        ),
        shareReplay({ bufferSize: 1, refCount: true }),
      )
    : of({ width: 1024, height: 768 });
}
