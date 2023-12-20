import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    UserRoutingModule
  ], 
  exports: [
    UserRoutingModule
  ]
})
export class UserModule { }
