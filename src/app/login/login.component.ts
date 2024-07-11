import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
  myForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('yea');
      const { email, password } = this.myForm.value;
      if (!this.authService.login(email, password)) {
        this.loginError = 'Invalid email or password';
      }
    } else {
      console.log('omo');
    }
  }

  fillForm(role: string): void {
    let email = '';
    let password = '';

    switch (role) {
      case 'admin':
        email = 'admin@example.com';
        password = 'admin123';
        break;
      case 'instructor':
        email = 'instructor@example.com';
        password = 'instructor123';
        break;
      case 'student':
        email = 'student@example.com';
        password = 'student123';
        break;
    }

    this.myForm.patchValue({ email, password });
  }
}
