import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteDescontoProduto } from './limite-desconto-produto';

describe('LimiteDescontoProduto', () => {
  let component: LimiteDescontoProduto;
  let fixture: ComponentFixture<LimiteDescontoProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimiteDescontoProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(LimiteDescontoProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
