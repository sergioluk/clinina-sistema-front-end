import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueValidadeProduto } from './estoque-validade-produto';

describe('EstoqueValidadeProduto', () => {
  let component: EstoqueValidadeProduto;
  let fixture: ComponentFixture<EstoqueValidadeProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueValidadeProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(EstoqueValidadeProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
