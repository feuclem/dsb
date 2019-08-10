import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {Characteristique1Component} from './characteristique1.component'

describe('Characteristique1Component', () => {
  let component: Characteristique1Component;
  let fixture: ComponentFixture<Characteristique1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Characteristique1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
