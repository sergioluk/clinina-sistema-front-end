import { Component, AfterViewInit ,ViewChild, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Icon } from "../../../../shared/icon/icon";
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { Drawer } from '../../../../shared/services/ui/drawer';
import { CriarProduto } from '../criar-produto/criar-produto';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';

export interface TabelaProdutos {
  nome: string;
  position: number;
  codigo: string;
  validade: string;
  estoque: number;
  custo: number;
  markup: number;
  precoVenda: number;
  situacao: string;
}

const ELEMENT_DATA: TabelaProdutos[] = [
  {
    position: 1, nome: 'Ração Premium Cães 10kg', codigo: 'RAC001', validade: '2026-12-10',
    estoque: 25,
    custo: 120,
    markup: 40,
    precoVenda: 168,
    situacao: 'Ativo'
  },
  {
    position: 2, nome: 'Ração Gatos Adultos 3kg', codigo: 'RAC002', validade: '2026-09-15',
    estoque: 18,
    custo: 60,
    markup: 50,
    precoVenda: 90,
    situacao: 'Ativo'
  },
  {
    position: 3, nome: 'Areia Higiênica 4kg', codigo: 'ARE001', validade: '2028-01-01',
    estoque: 30,
    custo: 12,
    markup: 80,
    precoVenda: 21.6,
    situacao: 'Ativo'
  },
  {
    position: 4, nome: 'Shampoo Pet Neutro 500ml', codigo: 'HIG001', validade: '2027-05-20',
    estoque: 12,
    custo: 15,
    markup: 70,
    precoVenda: 25.5,
    situacao: 'Ativo'
  },
  {
    position: 5, nome: 'Coleira Ajustável Média', codigo: 'COL001', validade: '2030-01-01',
    estoque: 20,
    custo: 8,
    markup: 100,
    precoVenda: 16,
    situacao: 'Ativo'
  },
  {
    position: 6, nome: 'Guia para Passeio 1,2m', codigo: 'GUI001', validade: '2030-01-01',
    estoque: 15,
    custo: 10,
    markup: 90,
    precoVenda: 19,
    situacao: 'Ativo'
  },
  {
    position: 7, nome: 'Brinquedo Mordedor Borracha', codigo: 'BRI001', validade: '2030-01-01',
    estoque: 22,
    custo: 7,
    markup: 120,
    precoVenda: 15.4,
    situacao: 'Ativo'
  },
  {
    position: 8, nome: 'Petisco Biscoito Canino 500g', codigo: 'PET001', validade: '2026-08-01',
    estoque: 35,
    custo: 9,
    markup: 80,
    precoVenda: 16.2,
    situacao: 'Ativo'
  },
  {
    position: 9, nome: 'Antipulgas Cães 10-20kg', codigo: 'MED001', validade: '2027-03-10',
    estoque: 10,
    custo: 45,
    markup: 60,
    precoVenda: 72,
    situacao: 'Ativo'
  },
  {
    position: 10, nome: 'Comedouro Inox Médio', codigo: 'COM001', validade: '2030-01-01',
    estoque: 14,
    custo: 18,
    markup: 75,
    precoVenda: 31.5,
    situacao: 'Ativo'
  },
];

@Component({
  selector: 'app-produtos-servicos',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, Icon, MatTableModule, MatSortModule, MatPaginatorModule,
     MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './produtos-servicos.html',
  styleUrl: './produtos-servicos.css',
})
export class ProdutosServicos implements AfterViewInit{

  constructor(public drawerService: Drawer){}

  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['position', 'nome', 'codigo', 'validade', 'estoque', 'custo', 'markup', 'precoVenda', 'situacao'];
  dataSource = new MatTableDataSource<TabelaProdutos>(ELEMENT_DATA);


  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.abrirProduto();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  value = '';

  abrirProduto() {
    this.drawerService.abrir(CriarProduto, 'right');
  }


}
