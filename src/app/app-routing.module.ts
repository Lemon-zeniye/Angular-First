import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NoteListComponent } from './note-list/note-list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "", component: NoteListComponent},
  {path: "add", component: FormComponent},
  {path: "add", component: FormComponent},
  {path: "edit/:id", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
