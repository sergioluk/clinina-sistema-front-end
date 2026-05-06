import { Component, computed, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Icon } from "../../../../shared/icon/icon";
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { JsonPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateTime } from 'luxon';
import { DadosBasicosProduto, ProdutoTipoEnum } from "../../components/dados-basicos-produto/dados-basicos-produto";
import { CustoPrecoProduto } from '../../components/custo-preco-produto/custo-preco-produto';
import { EstoqueValidadeProduto } from "../../components/estoque-validade-produto/estoque-validade-produto";
import { LimiteDescontoProduto } from "../../components/limite-desconto-produto/limite-desconto-produto";
import { startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { effect } from '@angular/core';

type ProdutoStepId =
  | 'dadosBasicos'
  | 'custoPreco'
  | 'estoqueValidade'
  | 'limiteDesconto'
  | 'areas'
  | 'itensPacote'
  | 'termosUso'
  | 'itensKit';

type ProdutoStep = {
  id: ProdutoStepId;
  label: string;
};

@Component({
  selector: 'app-criar-produto',
  imports: [
    Icon,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    JsonPipe,
    MatCheckboxModule,
    MatDatepickerModule,
    DadosBasicosProduto,
    CustoPrecoProduto,
    EstoqueValidadeProduto,
    LimiteDescontoProduto
  ],
  templateUrl: './criar-produto.html',
  styleUrl: './criar-produto.css',
})
export class CriarProduto {

  readonly ProdutoTipoEnum = ProdutoTipoEnum;

  constructor(
    private readonly dialogRef: MatDialogRef<CriarProduto>,
  ) {
      effect(() => {
        const tipo = this.tipoProduto();

        const codigoDeBarras = this.dadosBasicosFormGroup.controls.codigoDeBarras;
        const idMarca = this.dadosBasicosFormGroup.controls.idMarca;
        const unidade = this.dadosBasicosFormGroup.controls.unidade;

        if (tipo === ProdutoTipoEnum.PRODUTO) {
          codigoDeBarras.setValidators([Validators.required]);
          idMarca.setValidators([Validators.required]);
          unidade.setValidators([Validators.required]);
        } else if (tipo === ProdutoTipoEnum.SERVICO) {
          codigoDeBarras.clearValidators();
          idMarca.clearValidators();
          unidade.setValidators([Validators.required]);
        } else {
          codigoDeBarras.clearValidators();
          idMarca.clearValidators();
          unidade.clearValidators();
        }

        codigoDeBarras.updateValueAndValidity({ emitEvent: false });
        idMarca.updateValueAndValidity({ emitEvent: false });
        unidade.updateValueAndValidity({ emitEvent: false });
      });
   }

  fechar() {
    const element = document.querySelector('.drawer-right');

    if (element) {
      element.classList.add('closing');
      setTimeout(() => {
        this.dialogRef.close();
      }, 200);
    } else {
      this.dialogRef.close();
    }
  }

  private readonly _formBuilder = inject(FormBuilder);

  dadosBasicosFormGroup = this._formBuilder.group({
    tipoProduto: [ProdutoTipoEnum.PRODUTO, Validators.required],
    codigoDeBarras: ['', Validators.required],
    nomeProduto: ['', Validators.required],
    unidade: ['', Validators.required],
    idMarca: [0, Validators.required],
    idGrupo: [0, Validators.required],
  });
  custoPrecoFormGroup = this._formBuilder.group({
    proposito: ['vendaConsumoInterno', Validators.required],
    custo: ['', Validators.required],
    markup: ['', Validators.required],
    precoVenda: ['', Validators.required],
    exibePreco: [true, Validators.required],
    permiteAlterarPreco: [false, Validators.required],
  });
  estoqueValidadeFormGroup = this._formBuilder.group({
    estoqueFormGroup: this._formBuilder.group({
      controlaEstoque: [true, Validators.required],
      minimo: [1, Validators.required],
      maximo: ['', Validators.required],
      estoque: ['', Validators.required]
    }),
    validadeFormGroup: this._formBuilder.group({
      controlaValidade: [true, Validators.required],
      dataValidade: [null as DateTime | null, Validators.required],
    })
  })
  limiteDescontoFormGroup = this._formBuilder.group({
    tipoControleDesconto: ['obedeceLimiteDaEmpresaUsuarios', Validators.required]
  })
  areasFormGroup = this._formBuilder.group({
    banhoTosa: [true, Validators.required],
    clinica: [true, Validators.required],
    petshop: [true, Validators.required]
  })

  readonly tipoProduto = toSignal(
    this.dadosBasicosFormGroup.controls.tipoProduto.valueChanges.pipe(
      startWith(this.dadosBasicosFormGroup.controls.tipoProduto.value),
    ),
  );
  readonly proposito = toSignal(
    this.custoPrecoFormGroup.controls.proposito.valueChanges.pipe(
      startWith(this.custoPrecoFormGroup.controls.proposito.value),
    ),
  );
  readonly visibleSteps = computed<ProdutoStep[]>(() => {
    const tipo = this.tipoProduto();
    const proposito = this.proposito();

    if (tipo === ProdutoTipoEnum.PRODUTO) {
      const base: ProdutoStep[] = [
        { id: 'dadosBasicos', label: 'Dados básicos' },
        { id: 'custoPreco', label: 'Custo e preço' },
      ];

      if (proposito !== 'apenasConsumoInterno') {
        base.push(
          { id: 'estoqueValidade', label: 'Estoque e validade' },
          { id: 'limiteDesconto', label: 'Limite de desconto' },
        );
      }

      base.push({
        id: 'areas',
        label: 'Áreas',
      });

      return base;
    }

    if (tipo === ProdutoTipoEnum.SERVICO) {
      return [
        { id: 'dadosBasicos', label: 'Dados básicos' },
        { id: 'custoPreco', label: 'Custo e preço' },
        { id: 'limiteDesconto', label: 'Limite de desconto' },
        { id: 'areas', label: 'Áreas' },
      ];
    }

    if (tipo === ProdutoTipoEnum.PACOTE) {
      return [
        { id: 'dadosBasicos', label: 'Dados básicos' },
        { id: 'itensPacote', label: 'Itens do pacote' },
        { id: 'termosUso', label: 'Termos de uso' },
        { id: 'areas', label: 'Áreas' },
      ];
    }

    if (tipo === ProdutoTipoEnum.KIT) {
      return [
        { id: 'dadosBasicos', label: 'Dados básicos' },
        { id: 'itensKit', label: 'Itens do kit' },
        { id: 'areas', label: 'Áreas' },
      ];
    }

    return [];
  });

  readonly emptyFormGroup = this._formBuilder.group({});

  getStepForm(stepId: ProdutoStepId): FormGroup {
    switch (stepId) {
      case 'dadosBasicos':
        return this.dadosBasicosFormGroup;
      case 'custoPreco':
        return this.custoPrecoFormGroup;
      case 'estoqueValidade':
        return this.estoqueValidadeFormGroup;
      case 'limiteDesconto':
        return this.limiteDescontoFormGroup;
      case 'areas':
        return this.areasFormGroup;
      default:
        return this.emptyFormGroup;
    }
  }


  private formatDateBr(date: Date | DateTime | null): string | null {
    if (!date) {
      return null;
    }

    const nativeDate = date instanceof Date ? date : date.toJSDate();

    return new Intl.DateTimeFormat('pt-BR').format(nativeDate); //retorna 17/01/2026 dia/mes/ano
  }

  send() {
    const dataValidade = this.validadeFormGroup.value.dataValidade;

    const payload = {
      ...this.estoqueValidadeFormGroup.value,
      dataValidade: this.formatDateBr(dataValidade ?? null),
    };

    console.log(payload);
  }

  get estoqueFormGroup(): FormGroup {
    return this.estoqueValidadeFormGroup.get('estoqueFormGroup') as FormGroup;
  }

  get validadeFormGroup(): FormGroup {
    return this.estoqueValidadeFormGroup.get('validadeFormGroup') as FormGroup;
  }

}


