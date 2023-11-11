import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuariosService } from '../../../services/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  usuarios$: Observable<Usuario[]> | null = null;

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ){
    this.atualizar();
    console.log('Atualizar: ',this.atualizar());
  }

  ngOnInit(): void {

  }

  onAdd():any {
    this.router.navigate(['novo'], { relativeTo: this.route});
  }

  atualizar() {
    this.usuarios$ = this.usuariosService.lista()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar o usuario.');
        console.log('Erro ao carregar o usuario',error);
        return of([])
      })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data:erroMsg
    });
  }




}
