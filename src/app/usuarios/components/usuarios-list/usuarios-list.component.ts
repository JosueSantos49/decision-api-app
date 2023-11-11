import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit{

  @Input() usuarios: Usuario[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'email'];

  ngOnInit(): void {
  }

  onAdd():any{
    this.add.emit(true);
  }

}
