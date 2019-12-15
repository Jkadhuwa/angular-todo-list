import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: AddTodosComponent },
  { path: 'update/:id', component: EditTodoComponent},
  { path: '*****', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
