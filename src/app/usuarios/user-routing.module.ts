import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { AutGuard } from './guards/aut-guard';
import { LoginGuard } from './guards/login-guard';

const routes: Routes = [
  {path: 'login', component: UsuarioComponent, canActivate: [LoginGuard]}, 
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
