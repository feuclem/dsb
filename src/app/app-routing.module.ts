import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ArmesComponent} from './chooser/armes/armes.component'
import {BuilderComponent} from './builder/builder.component'

const routes: Routes = [
  {path: 'armes', component: ArmesComponent},
  {path: '', component: BuilderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
