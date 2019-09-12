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
import {MontureComponent} from './chooser/equipements/monture/monture.component'
import {FamilierComponent} from './chooser/equipements/familier/familier.component'
import {BouclierComponent} from './chooser/equipements/bouclier/bouclier.component'
import {DofusComponent} from './chooser/equipements/dofus/dofus.component'
import {TropheeComponent} from './chooser/equipements/trophee/trophee.component'
import {IopComponent} from './builder/iop/iop.component'
import {SacrieurComponent} from './builder/sacrieur/sacrieur.component'

const routes: Routes = [
  {path: 'trophee', component: TropheeComponent},
  {path: 'dofus', component: DofusComponent},
  {path: 'bouclier', component: BouclierComponent},
  {path: 'familier', component: FamilierComponent},
  {path: 'monture', component: MontureComponent},
  {path: 'cape', component: CapeComponent},
  {path: 'coiffe', component: CoiffeComponent},
  {path: 'ceinture', component: CeintureComponent},
  {path: 'bottes', component: BottesComponent},
  {path: 'anneau', component: AnneauComponent},
  {path: 'amulette', component: AmuletteComponent},
  {path: 'armes', component: ArmesComponent},
  {path: 'iop', component: IopComponent},
  {path: 'sacrieur', component: SacrieurComponent},
  {path: '', component: BuilderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
