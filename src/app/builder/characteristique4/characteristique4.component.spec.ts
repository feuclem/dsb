import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Characteristique4Component } from './characteristique4.component';

describe('Characteristique4Component', () => {
  let component: Characteristique4Component;
  let fixture: ComponentFixture<Characteristique4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Characteristique4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
