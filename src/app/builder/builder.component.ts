import { Component, OnInit } from '@angular/core'
import { MessagesStoreService } from '../shared/messages-store.service'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {

  textMessage: string

  constructor(private messagesStoreService: MessagesStoreService) { }

  ngOnInit() {
  }

  addMessage(): void {
    this.messagesStoreService.addMessage({
      author: 'John',
      content: this.textMessage
    })
    this.textMessage = ''
  }

}
