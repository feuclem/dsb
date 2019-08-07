import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'

import {AppComponent} from './app.component'
import {ArmesComponent} from './chooser/armes/armes.component'
import {BuilderComponent} from './builder/builder.component'
import {CommonModule} from '@angular/common'
import {StuffService} from './shared/stuff.service'
import {CharacteritiqueService} from './shared/characteritique.service'
import {AmuletteComponent} from './chooser/equipements/amulette/amulette.component'
import {AnneauComponent} from './chooser/equipements/anneau/anneau.component'
import {StatistiquesService} from './shared/statistiques.service'
import {BottesComponent} from './chooser/equipements/bottes/bottes.component'
import {CeintureComponent} from './chooser/equipements/ceinture/ceinture.component'
import {CoiffeComponent} from './chooser/equipements/coiffe/coiffe.component'
import {CapeComponent} from './chooser/equipements/cape/cape.component'
import {MontureComponent} from './chooser/equipements/monture/monture.component'
import {FamilierComponent} from './chooser/equipements/familier/familier.component'
import {BouclierComponent} from './chooser/equipements/bouclier/bouclier.component'

@NgModule({
  declarations: [
    AppComponent,
    ArmesComponent,
    BuilderComponent,
    AmuletteComponent,
    AnneauComponent,
    BottesComponent,
    CeintureComponent,
    CoiffeComponent,
    CapeComponent,
    MontureComponent,
    FamilierComponent,
    BouclierComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StuffService,
    CharacteritiqueService,
    StatistiquesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
