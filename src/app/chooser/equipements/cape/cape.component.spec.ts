import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapeComponent } from './cape.component';

describe('EquipementsComponent', () => {
  let component: CapeComponent;
  let fixture: ComponentFixture<CapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
