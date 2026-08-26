import { Component } from '@angular/core';
import { contactDetails } from '../constants/contact-details.consts';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-contactus',
    imports: [FormsModule, HttpClientModule],
    templateUrl: './contactus.component.html',
    styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  contactDetails = contactDetails;
  submitted = false;

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.http.post(
        'https://formspree.io/f/xpwlgevy',
        form.value,
        { headers: { 'Accept': 'application/json' } }
      )
      .pipe(
        catchError(() => of(null)) // gracefully handle errors
      )
      .subscribe(response => {
        if (response) {
          this.submitted = true;
          form.resetForm();
        }
      });
    }
  }
}
