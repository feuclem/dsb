import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {SacrieurComponent} from './sacrieur.component'

describe('SacrieurComponent', () => {
  let component: SacrieurComponent;
  let fixture: ComponentFixture<SacrieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacrieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacrieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
