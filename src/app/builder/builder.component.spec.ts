import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { BuilderComponent } from './builder.component'
import { MessagesStoreService } from '../shared/messages-store.service'


describe('MessageInputComponent', () => {
  let component: BuilderComponent
  let fixture: ComponentFixture<BuilderComponent>
  let service: MessagesStoreService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderComponent ],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [MessagesStoreService]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderComponent)
    component = fixture.componentInstance
    service = fixture.debugElement.injector.get(MessagesStoreService)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('#addMessage', () => {

    beforeEach(() => {
      spyOn(service, 'addMessage').and.stub
    })

    it('should post new message using the messages-store service', () => {
      // given
      component.textMessage = 'Fake test message'
      // when
      component.addMessage()
      // then
      expect(service.addMessage).toHaveBeenCalledWith({author: 'John', content: 'Fake test message'})
    })

    it('should reset textMessage attribute', () => {
      // given
      component.textMessage = 'Fake test message'
      // when
      component.addMessage()
      // then
      expect(component.textMessage).toEqual('')
    })
  })
})
