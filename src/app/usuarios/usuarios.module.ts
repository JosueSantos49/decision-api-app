import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './containers/usuarios/usuarios.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { UsuarioFormComponent } from './containers/usuario-form/usuario-form.component';


@NgModule({
  declarations: [
    //UsuariosComponent,
    UsuariosListComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class UsuariosModule { }
