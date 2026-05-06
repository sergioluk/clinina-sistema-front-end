import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Drawer } from '../../../../shared/services/ui/drawer';
import { Marca } from '../criar-marca/criar-marca';
import { ValidadeProduto } from "../validade-produto/validade-produto";
import { ListarMarcas } from '../listar-marcas/listar-marcas';
import { ListarGrupos } from '../listar-grupos/listar-grupos';
import { Grupo } from '../criar-grupo/criar-grupo';

interface ProdutoTipo {
  value: ProdutoTipoEnum;
  viewValue: string;
}

export enum ProdutoTipoEnum {
  PRODUTO = 'produto',
  SERVICO = 'servico',
  PACOTE = 'pacote',
  KIT = 'kit',
}

@Component({
  selector: 'app-dados-basicos-produto',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    ValidadeProduto
],
  templateUrl: './dados-basicos-produto.html',
  styleUrl: './dados-basicos-produto.css',
})
export class DadosBasicosProduto {
  @Input() form!: FormGroup;
  @Input() validadeForm!: FormGroup;
  readonly ProdutoTipoEnum = ProdutoTipoEnum;

  constructor(
    private drawerService: Drawer
  ) { }

  tipos: ProdutoTipo[] = [
    { value: ProdutoTipoEnum.PRODUTO, viewValue: 'Produto' },
    { value: ProdutoTipoEnum.SERVICO, viewValue: 'Serviço' },
    { value: ProdutoTipoEnum.PACOTE, viewValue: 'Pacote' },
    { value: ProdutoTipoEnum.KIT, viewValue: 'Kit' },
  ];


  marcaSelecionada!: Marca;
  abrirSelecaoMarca() {
    const dialogRef = this.drawerService.abrir(ListarMarcas, 'right');

    dialogRef.afterClosed().subscribe((marca: Marca) => {
      if (marca) {
        this.marcaSelecionada = marca;

        this.form.get('idMarca')?.setValue(marca.id);
      }
    });
  }

  grupoSelecionado!: any;
  abrirSelecaoGrupo() {
    const dialogRef = this.drawerService.abrir(ListarGrupos, 'right');

    dialogRef.afterClosed().subscribe((grupo: Grupo) => {
      if (grupo) {
        this.grupoSelecionado = grupo;

        this.form.get('idGrupo')?.setValue(grupo.id);
      }
    });
  }

  get tipoProduto() {
    return this.form.get('tipoProduto')?.value;
  }
}
