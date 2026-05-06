import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Icon } from '../../../../shared/icon/icon';

export interface Grupo {
  id: number
  nome: string
  categoriaId: number
}

export interface CategoriaGrupo {
  id: number
  nome: string
}

@Component({
  selector: 'app-criar-grupo',
  imports: [Icon, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './criar-grupo.html',
  styleUrl: './criar-grupo.css',
})
export class CriarGrupo {
  nome = "";

  constructor(
    private readonly dialogRef: MatDialogRef<CriarGrupo>
  ) {}

  salvar() {
    let marca: Grupo = {
      id: 5,
      nome: this.nome,
      categoriaId: 0
    }
    this.dialogRef.close(marca);
  }

  fechar() {
    this.dialogRef.close();
  }
}
