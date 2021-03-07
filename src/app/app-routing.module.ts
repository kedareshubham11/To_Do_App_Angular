import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
