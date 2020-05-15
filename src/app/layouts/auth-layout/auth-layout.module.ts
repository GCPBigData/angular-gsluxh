import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthLayoutRoutes} from './auth-layout.routing';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../../auth/auth.module';
import {LoginComponent} from '../../auth/login/login.component';
import {RegisterComponent} from '../../auth/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    AuthModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthLayoutModule { }
