import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMarca } from './criar-marca';

describe('CriarMarca', () => {
  let component: CriarMarca;
  let fixture: ComponentFixture<CriarMarca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarMarca],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarMarca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
