import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ArmesComponent} from './chooser/armes/armes.component'
import {BuilderComponent} from './builder/builder.component'
import {AmuletteComponent} from './chooser/equipements/amulette/amulette.component'
import {AnneauComponent} from './chooser/equipements/anneau/anneau.component'
import {BottesComponent} from './chooser/equipements/bottes/bottes.component'
import {CeintureComponent} from './chooser/equipements/ceinture/ceinture.component'
import {CoiffeComponent} from './chooser/equipements/coiffe/coiffe.component'
import {CapeComponent} from './chooser/equipements/cape/cape.component'

const routes: Routes = [
  {path: 'cape', component: CapeComponent},
  {path: 'coiffe', component: CoiffeComponent},
  {path: 'ceinture', component: CeintureComponent},
  {path: 'bottes', component: BottesComponent},
  {path: 'anneau', component: AnneauComponent},
  {path: 'amulette', component: AmuletteComponent},
  {path: 'armes', component: ArmesComponent},
  {path: '', component: BuilderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
