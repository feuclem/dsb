import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottesComponent } from './bottes.component';

describe('EquipementsComponent', () => {
  let component: BottesComponent;
  let fixture: ComponentFixture<BottesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
