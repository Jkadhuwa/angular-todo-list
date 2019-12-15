import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: HttpService, private router: Router) {}
  todos;
  ngOnInit() {
    this.service.getTodos().subscribe(data => {
      this.todos = data;
    });
  }
  onUpdate(todo) {
    this.router.navigate(['update', todo.id]);
    this.service.updateTodo(todo, todo.id).subscribe(
      res => {},
      error => {
        console.log('Can not update this todo');
      }
    );
  }
  onMarkDone(todo) {
    const updatedTodo = todo;
    updatedTodo.finished = true;
    this.service.updateTodo(updatedTodo, todo.id).subscribe(res => {
      this.ngOnInit();
    });
  }
  onDelete(todo) {
    this.service.deleteTodo(todo.id).subscribe(
      res => {
        this.ngOnInit();
      },
      error => {}
    );
  }
}
