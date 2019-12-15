import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

@NgModule({
  declarations: [AppComponent, AddTodosComponent, HomeComponent, PageNotFoundComponent, EditTodoComponent],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
  HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
