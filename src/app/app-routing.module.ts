import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/containers/usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usuario',
    component: UsuariosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
