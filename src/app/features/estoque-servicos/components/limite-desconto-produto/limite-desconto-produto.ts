import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface LimiteDesconto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-limite-desconto-produto',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './limite-desconto-produto.html',
  styleUrl: './limite-desconto-produto.css',
})
export class LimiteDescontoProduto {

  @Input() form!: FormGroup;

  controles: LimiteDesconto[] = [
    { value: 'obedeceLimiteDaEmpresaUsuarios', viewValue: 'Obedece limite da empresa e usuários' },
    { value: 'limiteDescontoEspecifico', viewValue: 'Limite de desconto especifico' },
    { value: 'naoPermiteReceberDesconto', viewValue: 'Não permite receber desconto' },
    { value: 'permiteDescontoAte100', viewValue: 'Permite desconto de até 100%' }
  ];
}
