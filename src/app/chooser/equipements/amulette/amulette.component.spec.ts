import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmuletteComponent } from './amulette.component';

describe('EquipementsComponent', () => {
  let component: AmuletteComponent;
  let fixture: ComponentFixture<AmuletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmuletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmuletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
