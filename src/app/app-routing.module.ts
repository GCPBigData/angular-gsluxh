import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'auth', component: AuthLayoutComponent, children: [
      {path: '', loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'}
    ]},
  { path: 'admin', component: AdminLayoutComponent, children: [
      {path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}
    ] }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }