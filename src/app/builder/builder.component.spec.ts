import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { BuilderComponent } from './builder.component'


describe('MessageInputComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderComponent ],
      imports: [FormsModule, HttpClientTestingModule]
    })
    .compileComponents()
  }))
})
