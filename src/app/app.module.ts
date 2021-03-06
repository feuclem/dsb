import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'

import {AppComponent} from './app.component'
import {ArmesComponent} from './chooser/equipements/armes/armes.component'
import {BuilderComponent} from './builder/builder.component'
import {CommonModule} from '@angular/common'
import {StuffService} from './shared/service/stuff.service'
import {CharacteristiqueService} from './shared/service/characteristique.service'
import {AmuletteComponent} from './chooser/equipements/amulette/amulette.component'
import {Anneau1Component} from './chooser/equipements/anneau1/anneau1.component'
import {Anneau2Component} from './chooser/equipements/anneau2/anneau2.component'
import {StatistiquesService} from './shared/service/statistiques.service'
import {BottesComponent} from './chooser/equipements/bottes/bottes.component'
import {CeintureComponent} from './chooser/equipements/ceinture/ceinture.component'
import {CoiffeComponent} from './chooser/equipements/coiffe/coiffe.component'
import {CapeComponent} from './chooser/equipements/cape/cape.component'
import {MontureComponent} from './chooser/equipements/monture/monture.component'
import {FamilierComponent} from './chooser/equipements/familier/familier.component'
import {BouclierComponent} from './chooser/equipements/bouclier/bouclier.component'
import {DofusComponent} from './chooser/equipements/dofus/dofus.component'
import {TropheeComponent} from './chooser/equipements/trophee/trophee.component'
import {PanoplieService} from './shared/service/panoplie.service'
import {PanoplieHttpService} from './shared/httpService/panoplie.http.service'
import {Stuff1Component} from './builder/stuff1/stuff1.component'
import {Stuff2Component} from './builder/stuff2/stuff2.component'
import {Characteristique1Component} from './builder/characteristique1/characteristique1.component'
import {Characteristique2Component} from './builder/characteristique2/characteristique2.component'
import {IopComponent} from './spell/iop/iop.component'
import {DamageCalculatorService} from './builder/damage-calculator.service'
import {PanoplieBonusComponent} from './builder/panoplie-bonus/panoplie-bonus.component'
import {NiveauComponent} from './chooser/niveau/niveau.component'
import {ClasseComponent} from './chooser/classe/classe.component'
import {SacrieurComponent} from './spell/sacrieur/sacrieur.component'
import {ClasseService} from './chooser/classe/classe.service'
import {Characteristique3Component} from './builder/characteristique3/characteristique3.component'
import {PointsdecaracService} from './shared/service/pointsdecarac.service'
import {Characteristique4Component} from './builder/characteristique4/characteristique4.component'
import {NavComponent} from './nav/nav.component'
import {EquipementsComponent} from './chooser/equipements/equipements.component'
import {PanoplieCharacteristiqueService} from './shared/service/panoplieCharacteristique.service'
import {ProgressbarComponent} from './progressbar/progressbar.component'
import {DevlogComponent} from './devlog/devlog.component'
import {FooterComponent} from './footer/footer.component'
import {EquipementsHttpService} from './shared/httpService/equipements.http.service'
import {SpellComponent} from './spell/spell.component'
import {StuffViewerComponent} from './builder/stuff-viewer/stuff-viewer.component'
import {StuffWatcherService} from './builder/stuff.watcher.service'
import {GoogleUserService} from './shared/service/googleuser/google.user.service'
import {LocalStoreService} from './shared/service/localstorage/local-store.service'
import {FirebaseHttpService} from './shared/httpService/firebase.http.service'

@NgModule({
  declarations: [
    AppComponent,
    ArmesComponent,
    BuilderComponent,
    AmuletteComponent,
    Anneau1Component,
    Anneau2Component,
    BottesComponent,
    CeintureComponent,
    CoiffeComponent,
    CapeComponent,
    MontureComponent,
    FamilierComponent,
    BouclierComponent,
    DofusComponent,
    TropheeComponent,
    Stuff1Component,
    Stuff2Component,
    Characteristique1Component,
    Characteristique2Component,
    IopComponent,
    PanoplieBonusComponent,
    NiveauComponent,
    ClasseComponent,
    SacrieurComponent,
    Characteristique3Component,
    Characteristique4Component,
    NavComponent,
    EquipementsComponent,
    ProgressbarComponent,
    DevlogComponent,
    FooterComponent,
    SpellComponent,
    StuffViewerComponent
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
    CharacteristiqueService,
    PanoplieCharacteristiqueService,
    StatistiquesService,
    PanoplieHttpService,
    PanoplieService,
    DamageCalculatorService,
    ClasseService,
    PointsdecaracService,
    EquipementsHttpService,
    StuffWatcherService,
    GoogleUserService,
    LocalStoreService,
    FirebaseHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
