import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NavComponent } from './nav.component';
import { WindowSizeService } from '../app-services/window-size.service';
import { provideRouter } from '@angular/router';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [
        provideRouter([]),
        {
          provide: WindowSizeService,
          useValue: { windowSize$: of({ width: 640, height: 800 }) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts with the menu closed on a small screen', () => {
    expect(component.isLargeScreen).toBeFalse();
    expect(component.showLinks).toBeFalse();
  });

  it('toggles the mobile sidebar', () => {
    component.toggleSidebar();
    expect(component.showLinks).toBeTrue();

    component.closeSidebarOnNavigation();
    expect(component.showLinks).toBeFalse();
  });
});
