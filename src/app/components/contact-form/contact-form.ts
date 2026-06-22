import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  userForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), Validators.email]
    }),
    inquiry: new FormControl('', {
      validators: [Validators.required]
    }), 
    privacyPolicy: new FormControl(false, {
      validators: [Validators.requiredTrue]
    })
  });

  onSubmit() {
  if (this.userForm.valid) {
    console.log(this.userForm.value);
  }
}
}
