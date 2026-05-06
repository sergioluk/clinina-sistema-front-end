import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Icon } from '../../../../shared/icon/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Drawer } from '../../../../shared/services/ui/drawer';
import { CriarMarca } from '../criar-marca/criar-marca';

export interface Marca {
  id: number
  nome: string
}

@Component({
  selector: 'app-listar-marcas',
  imports: [Icon, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, AsyncPipe, MatButtonModule],
  templateUrl: './listar-marcas.html',
  styleUrl: './listar-marcas.css',
})
export class ListarMarcas {
  pesquisarMarca = new FormControl<string>('');

    constructor(
      private readonly dialogRef: MatDialogRef<ListarMarcas>,
      private readonly drawerService: Drawer
    ) {
      this.filteredMarcas$ = this.pesquisarMarca.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        map(value => {
          const termo = (value || '').toLowerCase();
          return this.marcas.filter(marca =>
            marca.nome.toLowerCase().includes(termo)
          );
        })
      );
    }

    marcas: Marca[] = [
      {id: 1,nome: 'Roger'},
      {id: 2,nome: 'Nestle'},
      {id: 3,nome: 'Nvidia'},
    ]

    filteredMarcas$!: Observable<Marca[]>;


    selecionarMarca(marca: Marca) {
      this.dialogRef.close(marca);
    }

    fechar() {
      this.dialogRef.close();
    }

  criarMarca() {
    const dialogRef = this.drawerService.abrir(CriarMarca, 'right');

    dialogRef.afterClosed().subscribe((marca: Marca) => {
      if (marca) {
        this.dialogRef.close(marca);
      }
    });
  }
}
