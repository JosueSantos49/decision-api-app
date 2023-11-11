import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelo/Usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      codigo: [0],
      nome: [''],
      email: [''],
      senha: ['']
    });
  }

  ngOnInit(): void {
    const usuario: Usuario = this.route.snapshot.data['usuario'];
    this.form.setValue({
      codigo: usuario.codigo,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha
    });
  }

  onSubmit() {
    console.log('onSubmit: ',this.form.value);
    this.usuariosService.salvar(this.form.value)
    .subscribe(resultado => this.onSucess(), error => this.onError());
  }

  onCancelar() {
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Usuário salva com sucesso!', '', { duration: 5000});
    this.onCancelar();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar o usuário.', '', { duration: 5000});
  }

  getErrorMessage(campoNome: string) {
    const campo = this.form.get(campoNome);

    if(campo?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if(campo?.hasError('minlength')) {
      const requiredLength = campo.errors ? campo.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if(campo?.hasError('maxlength')) {
      const requiredLength = campo.errors ? campo.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }

}
