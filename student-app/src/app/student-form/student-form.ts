import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService, Student } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.html',
   styleUrls: ['./student-form.css'] 
})
export class StudentFormComponent implements OnInit {
  students: Student[] = [];
  studentForm!: FormGroup;

  constructor(private studentService: StudentService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      age: ['', Validators.required]
    });

    this.loadStudents();
  }

  // onSubmit(): void {
  //   if (this.studentForm.valid) {
  //     this.studentService.addStudent(this.studentForm.value).subscribe(() => {
  //       this.loadStudents(); // refresh list after adding
  //       this.studentForm.reset();
  //     });
  //   }
  // }

  onSubmit(): void {
  if (this.studentForm.valid) {
    this.studentService.addStudent(this.studentForm.value).subscribe(() => {
      this.loadStudents(); // refresh list
      this.studentForm.reset();
    });
  }
}


  loadStudents(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }
}
