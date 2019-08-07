import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeintureComponent } from './ceinture.component';

describe('EquipementsComponent', () => {
  let component: CeintureComponent;
  let fixture: ComponentFixture<CeintureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeintureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeintureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
