import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Icon } from '../../../../shared/icon/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface Marca {
  id: number
  nome: string
}

@Component({
  selector: 'app-criar-marca',
  imports: [Icon, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './criar-marca.html',
  styleUrl: './criar-marca.css',
})
export class CriarMarca {

  nome = "";

  constructor(
    private readonly dialogRef: MatDialogRef<CriarMarca>
  ) {}

  salvar() {
    let marca: Marca = {
      id: 5,
      nome: this.nome
    }
    this.dialogRef.close(marca);
  }

  fechar() {
    this.dialogRef.close();
  }
}
