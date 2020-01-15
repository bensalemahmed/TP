import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2Exercice2Component } from './tp2-exercice2.component';

describe('Tp2Exercice2Component', () => {
  let component: Tp2Exercice2Component;
  let fixture: ComponentFixture<Tp2Exercice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tp2Exercice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp2Exercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
