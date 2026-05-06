import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-validade-produto',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './validade-produto.html',
  styleUrl: './validade-produto.css',
})
export class ValidadeProduto {
  @Input() form!: FormGroup;
}
