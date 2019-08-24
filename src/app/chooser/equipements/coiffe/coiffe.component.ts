import {Component, OnInit} from '@angular/core'
import {CoiffeHttpService} from './coiffe.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../shared/entities/Equipement'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Component({
  selector: 'dsb-equipements',
  templateUrl: './coiffe.component.html',
  styles: [],
  providers: [
    CoiffeHttpService
  ]
})
export class CoiffeComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private coiffeHttpService: CoiffeHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.coiffeHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    this.stuffService.coiffe = this.equipements[index].imgUrl
    this.stuffService.listIdEquipment = [this.equipements[index].id]
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
