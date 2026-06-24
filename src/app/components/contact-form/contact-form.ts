import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})

export class ContactForm {
  userForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'blur'
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    message: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur'
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

  get name() {
    return this.userForm.controls.name;
  }

  get email() {
    return this.userForm.controls.email;
  }

  get message() {
    return this.userForm.controls.message;
  }

  get privacyPolicy() {
    return this.userForm.controls.privacyPolicy;
  }

}
