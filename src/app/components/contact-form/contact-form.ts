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
  sendMailForm = new FormGroup({
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

  get name() {
    return this.sendMailForm.controls.name;
  }

  get email() {
    return this.sendMailForm.controls.email;
  }

  get message() {
    return this.sendMailForm.controls.message;
  }

  get privacyPolicy() {
    return this.sendMailForm.controls.privacyPolicy;
  }

  formMessage = '';
  messageType: 'success' | 'error' | '' = '';

  async onSubmit() {
    if (this.sendMailForm.valid) {
      const { name, email, message } = this.sendMailForm.value;
      try {
        const httpResponse = await fetch('https://www.marc.riehl.de/send-it/sendMail.de', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        });

        const result = await httpResponse.json();


        if (result.success) {
          this.sendMailForm.reset();
          this.formMessage = 'contact.form-messages.success';
          this.messageType = 'success';
          setTimeout(() => {
            this.sendMailForm.reset();
            this.formMessage = '';
            this.messageType = '';
          }, 3000);
        } else {
          this.formMessage = 'contact.form-messages.error';
          this.messageType = 'error';
        }
      } catch (error) {
        this.formMessage = 'contact.form-messages.network';
        this.messageType = 'error';
      }
    }
  }

}
