import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get(`${this.url}/todos`);
  }
  getTodo(id: number) {
    return this.httpClient.get(`${this.url}/todos/${id}`);
  }
  addTodo(data: object): Observable<any> {
    return this.httpClient.post(`${this.url}/todos`, data);
  }

  updateTodo(updatedTodo: any, id: number) {
    return this.httpClient.put(`${this.url}/todos/${id}`, updatedTodo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/todos/${id}`);
  }
}
