import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

declare function init(): void;

@Component({
  selector: 'app-shared-admin-instructor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shared-admin-instructor.component.html',
  styleUrl: './shared-admin-instructor.component.scss',
})
export class SharedAdminInstructorComponent {
  isAdmin: boolean = false;
  isInstructor: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const role = this.authService.getUserRole();
    this.isAdmin = role === 'admin';
    this.isInstructor = role === 'instructor';
  }

  ngAfterViewInit(): void {
    init();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
