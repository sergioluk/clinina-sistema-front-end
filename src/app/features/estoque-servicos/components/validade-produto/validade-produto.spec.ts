import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadeProduto } from './validade-produto';

describe('ValidadeProduto', () => {
  let component: ValidadeProduto;
  let fixture: ComponentFixture<ValidadeProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidadeProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidadeProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
