import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosServicos } from './produtos-servicos';

describe('Estoque', () => {
  let component: ProdutosServicos;
  let fixture: ComponentFixture<ProdutosServicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosServicos],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosServicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
