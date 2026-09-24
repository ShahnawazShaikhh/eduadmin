import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentFormComponent } from "./student-form/student-form";
import { StudentListComponent } from "./student-list/student-list";

@Component({
  selector: 'app-root',
  imports: [StudentFormComponent, StudentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-app');
}
