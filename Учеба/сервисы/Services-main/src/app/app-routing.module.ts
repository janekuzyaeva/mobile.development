import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './purchases/view/view.component';
import { AddComponent } from './purchases/add/add.component';
import { EditComponent } from './purchases/edit/edit.component';


const routes: Routes = [
  { path:  "", component: HomeComponent},
  { path: "purchases", component: ViewComponent},
  { path: "purchases/add", component: AddComponent},
  { path: "purchases/edit/:id", component: EditComponent},
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
