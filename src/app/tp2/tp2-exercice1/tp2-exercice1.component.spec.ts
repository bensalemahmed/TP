import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2Exercice1Component } from './tp2-exercice1.component';

describe('Tp2Exercice1Component', () => {
  let component: Tp2Exercice1Component;
  let fixture: ComponentFixture<Tp2Exercice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tp2Exercice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp2Exercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
