import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBasicosProduto } from './dados-basicos-produto';

describe('DadosBasicosProduto', () => {
  let component: DadosBasicosProduto;
  let fixture: ComponentFixture<DadosBasicosProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosBasicosProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(DadosBasicosProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
