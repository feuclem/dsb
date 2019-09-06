import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Characteristique3Component } from './characteristique3.component';

describe('Characteristique3Component', () => {
  let component: Characteristique3Component;
  let fixture: ComponentFixture<Characteristique3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Characteristique3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
