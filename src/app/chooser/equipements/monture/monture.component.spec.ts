import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontureComponent } from './monture.component';

describe('EquipementsComponent', () => {
  let component: MontureComponent;
  let fixture: ComponentFixture<MontureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
