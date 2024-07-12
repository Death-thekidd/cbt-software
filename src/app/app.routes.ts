import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SharedAdminInstructorComponent } from './shared-admin-instructor/shared-admin-instructor.component';
import { StudentComponent } from './student/student.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: SharedAdminInstructorComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'instructor-dashboard', component: InstructorDashboardComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
