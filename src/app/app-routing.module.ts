import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowauthorComponent } from './showauthor/showauthor.component';
import { ShowbookComponent } from './showbook/showbook.component';

const routes: Routes = [
  {path:"showbooks", component:ShowbookComponent},
  {path:"showauthors", component:ShowauthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
