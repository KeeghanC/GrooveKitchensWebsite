import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { NgForm } from '@angular/forms';
import { ContactusComponent } from './contactus.component';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactusComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => httpTesting.verify());

  it('submits a valid kitchen enquiry to Formspree', () => {
    const form = {
      valid: true,
      value: {
        name: 'Test Customer',
        email: 'customer@example.com',
        phone: '021 123 4567',
        projectType: 'new-kitchen',
        message: 'We would like help planning a new kitchen.',
      },
      resetForm: jasmine.createSpy('resetForm'),
    } as unknown as NgForm;

    component.onSubmit(form);

    const request = httpTesting.expectOne('https://formspree.io/f/xpwlgevy');
    expect(request.request.method).toBe('POST');
    expect(request.request.body.projectType).toBe('new-kitchen');

    request.flush({ ok: true });
    expect(component.submitted).toBeTrue();
  });
});
