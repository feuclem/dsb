import { TestBed, waitForAsync } from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {BuilderComponent} from './builder/builder.component'
import {HttpClientTestingModule} from '@angular/common/http/testing'

xdescribe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        BuilderComponent
      ]
    }).compileComponents()
  }))
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
