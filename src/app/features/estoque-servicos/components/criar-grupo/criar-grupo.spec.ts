import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarGrupo } from './criar-grupo';

describe('CriarGrupo', () => {
  let component: CriarGrupo;
  let fixture: ComponentFixture<CriarGrupo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarGrupo],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarGrupo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
