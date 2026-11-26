import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  private readonly formBuilder = inject(FormBuilder);
  readonly enquiryForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  submitEnquiry(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }
    const { name, email, service, message } = this.enquiryForm.getRawValue();
    const subject = encodeURIComponent(`Website enquiry: ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`);
    // Replace this placeholder with the confirmed business email before launch.
    window.location.href = `mailto:hello@baarusolution.com?subject=${subject}&body=${body}`;
  }
}