import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IgxButtonModule } from 'igniteui-angular';

const routes: Routes = [
  {
    path:"home",
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    IgxButtonModule
  ]
})
export class HomeModule { }
