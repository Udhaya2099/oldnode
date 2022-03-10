import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { New1Component } from './new1/new1.component';
import { ShowauthorComponent } from './showauthor/showauthor.component';
import { ShowbookComponent } from './showbook/showbook.component';

const routes: Routes = [
  {path:"showbooks", component:ShowbookComponent},
  {path:"showauthors", component:ShowauthorComponent},
  {path:"shoepeople",component:New1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
