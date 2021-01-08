import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { IgxButtonModule } from 'igniteui-angular';

const routes: Routes = [
  {
    path:"",
    component:UserListComponent
  },
  {
    path:":id",
    component:UserComponent,
    children:[
      {
        path:"detail",
        component:UserDetailComponent
      },
      {
        path:"role",
        component:UserRoleComponent
      },
      {
        path:"",
        redirectTo:"details",
        pathMatch:"full"
      }
    ]
  },

]

@NgModule({
  declarations: [UserComponent,UserDetailComponent,UserListComponent,UserRoleComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),IgxButtonModule
  ]
})
export class UserModule { }
