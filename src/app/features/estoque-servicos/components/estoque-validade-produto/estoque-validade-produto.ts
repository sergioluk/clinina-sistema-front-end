import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ValidadeProduto } from "../validade-produto/validade-produto";
import { EstoqueProduto } from "../estoque-produto/estoque-produto";

@Component({
  selector: 'app-estoque-validade-produto',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    ValidadeProduto,
    EstoqueProduto
],
  templateUrl: './estoque-validade-produto.html',
  styleUrl: './estoque-validade-produto.css',
})
export class EstoqueValidadeProduto {
  @Input() estoqueForm!: FormGroup;
  @Input() validadeForm!: FormGroup;

}
