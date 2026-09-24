import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list';
import { StudentFormComponent } from './student-form/student-form';

export const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'add-student', component: StudentFormComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' }
];
