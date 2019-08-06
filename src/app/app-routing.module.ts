import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {ArmesComponent} from './chooser/armes/armes.component'

const routes: Routes = [
  { path: 'armes', component: ArmesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
