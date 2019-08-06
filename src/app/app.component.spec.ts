import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { MessageListComponent } from './message-list/message-list.component'
import { MessageItemComponent } from './message-list/message-item/message-item.component'
import { FormsModule } from '@angular/forms'
import { BuilderComponent } from './builder/builder.component'
import { MessagesStoreService } from './shared/messages-store.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        MessageListComponent,
        MessageItemComponent,
        BuilderComponent
      ],
      providers: [MessagesStoreService]
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
