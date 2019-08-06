import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { BuilderComponent } from './builder/builder.component'
import { MessagesStoreService } from './shared/messages-store.service'
import { ArmesComponent } from './chooser/armes/armes.component'

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ArmesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessagesStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
