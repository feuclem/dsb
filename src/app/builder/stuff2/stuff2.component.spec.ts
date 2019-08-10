import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {Stuff2Component} from './stuff2.component'

describe('Stuff2Component', () => {
  let component: Stuff2Component;
  let fixture: ComponentFixture<Stuff2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stuff2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stuff2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
