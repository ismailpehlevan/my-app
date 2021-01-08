import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NullComponent } from './null/null.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"user",
    loadChildren: () => import("./user/user.module").then(m=>m.UserModule)
  },
  {
    path:"**",
    component:NullComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
