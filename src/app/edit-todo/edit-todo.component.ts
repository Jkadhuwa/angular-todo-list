import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['../add-todos/add-todos.component.scss']
})
export class EditTodoComponent implements OnInit {
  updatedForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: HttpService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  todoId: number;

  ngOnInit() {
    this.updatedForm = this.fb.group({
      todoName: ['', Validators.required],
      todoDescription: ['', Validators.required]
    });
    this.activeRoute.paramMap.subscribe(params => {
      this.todoId = +params.get('id');
      this.todoId ? this.getTodo(this.todoId) : '';
    });
  }
  getTodo(id: number) {
    this.service.getTodo(id).subscribe(
      todo => {
        this.editTodo(todo);
      },
      error => {
        console.log(error);
      }
    );
  }
  editTodo(todo) {
    this.updatedForm.patchValue({
      todoName: todo.name,
      todoDescription: todo.description,
      id: todo.id
    });
  }

  get updateForm() {
    return this.updatedForm.controls;
  }
  onSubmit() {
    const formData: object = this.updatedForm.value;
    this.service.updateTodo(formData, this.todoId).subscribe(
      res => {
        this.router.navigate(['/home']);
      },
      error => {}
    );
  }
}
