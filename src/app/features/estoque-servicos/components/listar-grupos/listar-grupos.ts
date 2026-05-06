import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { startWith, debounceTime, map, Observable } from 'rxjs';
import { Icon } from '../../../../shared/icon/icon';
import { Drawer } from '../../../../shared/services/ui/drawer';
import { ListarMarcas } from '../listar-marcas/listar-marcas';
import { CategoriaGrupo, CriarGrupo, Grupo } from '../criar-grupo/criar-grupo';

type GrupoCategoria = {
  nome: string;
  itens: Grupo[];
};

@Component({
  selector: 'app-listar-grupos',
  imports: [Icon, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, AsyncPipe, MatButtonModule, MatDialogContent],
  templateUrl: './listar-grupos.html',
  styleUrl: './listar-grupos.css',
})
export class ListarGrupos {
  pesquisarGrupo = new FormControl<string>('');

  categorias: CategoriaGrupo[] = [
    {id: 1, nome: "Clinica"},
    {id: 2, nome: "Hotel"},
    {id: 3, nome: "Pet Shop"}
  ]

  grupos: Grupo[] = [
    { id: 1, nome: 'Cirurgias', categoriaId: 1 },
    { id: 2, nome: 'Consultas', categoriaId: 1 },
    { id: 3, nome: 'Exames', categoriaId: 1 },
    { id: 4, nome: 'Internamento', categoriaId: 1 },
    { id: 5, nome: 'Procedimentos', categoriaId: 1 },
    { id: 6, nome: 'Vacinas', categoriaId: 1 },

    { id: 7, nome: 'Hospedagem', categoriaId: 2 },

    { id: 8, nome: 'Acessórios', categoriaId: 3 },
    { id: 9, nome: 'Antiparasitários', categoriaId: 3 },
    { id: 10, nome: 'Biscoitos e Petiscos', categoriaId: 3 },
    { id: 11, nome: 'Brinquedos', categoriaId: 3 },
    { id: 12, nome: 'Casas e Cx de Transporte', categoriaId: 3 },
    { id: 13, nome: 'Coleiras e Guias', categoriaId: 3 },
    { id: 14, nome: 'Farmácia', categoriaId: 3 },
    { id: 15, nome: 'Higiene e Beleza', categoriaId: 3 },
  ];

  filteredCategorias$!: Observable<GrupoCategoria[]>;

  constructor(
    private readonly dialogRef: MatDialogRef<ListarMarcas>,
    private readonly drawerService: Drawer
  ) {
    this.filteredCategorias$ = this.pesquisarGrupo.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map(value => {
        const termo = (value || '').toLowerCase();

        const filtrados = this.grupos.filter(grupo =>
          grupo.nome.toLowerCase().includes(termo)
        );

        return this.agruparPorCategoria(filtrados);
      })
    );
  }

  private agruparPorCategoria(grupos: Grupo[]): GrupoCategoria[] {
    const mapa = new Map<number, Grupo[]>();

    // agrupa por categoriaId
    grupos.forEach(grupo => {
      if (!mapa.has(grupo.categoriaId)) {
        mapa.set(grupo.categoriaId, []);
      }
      mapa.get(grupo.categoriaId)!.push(grupo);
    });

    // transforma em estrutura com nome da categoria
    return Array.from(mapa.entries()).map(([categoriaId, itens]) => {
      const categoria = this.categorias.find(c => c.id === categoriaId);

      return {
        nome: categoria?.nome ?? 'Sem categoria',
        itens
      };
    });
  }

  selecionarGrupo(grupo: Grupo) {
    this.dialogRef.close(grupo);
  }

  fechar() {
    this.dialogRef.close();
  }

  criarGrupo() {
    const dialogRef = this.drawerService.abrir(CriarGrupo, 'right');

    dialogRef.afterClosed().subscribe((grupo: Grupo) => {
      if (grupo) {
        this.dialogRef.close(grupo);
      }
    });
  }
}
