import { Injectable, NgZone } from '@angular/core';
import { fromEvent, map, Observable, of, startWith } from 'rxjs';

export interface WindowSize {
  width: number;
  height: number;
}

@Injectable({ providedIn: 'root' })
export class WindowSizeService {
  windowSize$ = of({ width: 1920, height: 1080 }); // Placeholder observable
  // windowSize$ = fromEvent(window, 'resize').pipe(
  //   startWith(this.getWindowSize()), // Emit initial size
  //   map(() => this.getWindowSize())
  // );

  // constructor(private ngZone: NgZone) {
  //   // Ensure the resize observable runs inside Angular zone if needed
  //   this.windowSize$ = new Observable<WindowSize>((observer) => {
  //     const emitSize = () => observer.next(this.getWindowSize());

  //     emitSize(); // emit on subscribe
  //     const handler = () => this.ngZone.run(emitSize);

  //     window.addEventListener('resize', handler);
  //     return () => window.removeEventListener('resize', handler);
  //   });
  // }

  // private getWindowSize(): WindowSize {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };
  // }
}
