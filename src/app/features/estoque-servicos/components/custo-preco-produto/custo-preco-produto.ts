import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProdutoTipoEnum } from '../dados-basicos-produto/dados-basicos-produto';

interface ProdutoProposito {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-custo-preco-produto',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './custo-preco-produto.html',
  styleUrl: './custo-preco-produto.css',
})
export class CustoPrecoProduto {
  readonly ProdutoTipoEnum = ProdutoTipoEnum;

  @Input() form!: FormGroup;
  @Input() tipoProduto!: ProdutoTipoEnum;

  //Segundo step
  propositos: ProdutoProposito[] = [
    { value: 'vendaConsumoInterno', viewValue: 'Venda e consumo interno' },
    { value: 'apenasVenda', viewValue: 'Apenas venda' },
    { value: 'apenasConsumoInterno', viewValue: 'Apenas consumo interno' }
  ];

}
