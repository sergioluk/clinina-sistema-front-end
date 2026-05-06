import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMarcas } from './listar-marcas';

describe('ListarMarcas', () => {
  let component: ListarMarcas;
  let fixture: ComponentFixture<ListarMarcas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMarcas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarMarcas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
