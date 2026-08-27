import { Component } from '@angular/core';
import { contactDetails } from '../constants/contact-details.consts';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { PHONE_HREF } from '../constants/phone-href.const';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss',
})
export class ContactusComponent {
  contactDetails = contactDetails;
  phoneHref = PHONE_HREF;
  submitted = false;
  submitting = false;
  submitError = '';

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid && !this.submitting) {
      this.submitting = true;
      this.submitError = '';
      this.http
        .post('https://formspree.io/f/xpwlgevy', form.value, {
          headers: { Accept: 'application/json' },
        })
        .pipe(
          catchError(() => {
            this.submitError =
              'We could not send your enquiry right now. Please call or email us directly.';
            return of(null);
          }),
          finalize(() => (this.submitting = false)),
        )
        .subscribe((response) => {
          if (response) {
            this.submitted = true;
            form.resetForm();
          }
        });
    }
  }
}
