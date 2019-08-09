import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {TropheeComponent} from './trophee.component'

describe('EquipementsComponent', () => {
  let component: TropheeComponent;
  let fixture: ComponentFixture<TropheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TropheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TropheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
