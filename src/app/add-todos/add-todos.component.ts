import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.scss']
})
export class AddTodosComponent implements OnInit {
  todoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      todoName: ['', Validators.required],
      todoDescription: ['', Validators.required]
    });
  }

  get form() {
    return this.todoForm.controls;
  }
  onSubmit() {
    const formData: object = this.todoForm.value;
    this.service.addTodo(formData).subscribe(
      res => {
        this.router.navigate(['/home']);
      },
      error => {}
    );
  }
}
