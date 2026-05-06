import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-estoque-produto',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './estoque-produto.html',
  styleUrl: './estoque-produto.css',
})
export class EstoqueProduto {
  @Input() form!: FormGroup;
}
