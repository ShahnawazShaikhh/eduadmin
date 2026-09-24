import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService, Student } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html'
})
export class StudentListComponent {

  students: Student[] = [];

  // Table is hidden initially
  showStudents: boolean = false;

  constructor(private studentService: StudentService) {}

  // Show data when button is clicked
  showAllStudents(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
      this.showStudents = true;
    });
  }

  // Hide table
  hideStudents(): void {
    this.showStudents = false;
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.showAllStudents();
    });
  }
}