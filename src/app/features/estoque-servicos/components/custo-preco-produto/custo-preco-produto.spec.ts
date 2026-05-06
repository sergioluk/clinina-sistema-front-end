import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoPrecoProduto } from './custo-preco-produto';

describe('CustoPrecoProduto', () => {
  let component: CustoPrecoProduto;
  let fixture: ComponentFixture<CustoPrecoProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustoPrecoProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(CustoPrecoProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
