import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {Characteristique2Component} from './characteristique2.component'

describe('Characteristique2Component', () => {
  let component: Characteristique2Component;
  let fixture: ComponentFixture<Characteristique2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Characteristique2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
