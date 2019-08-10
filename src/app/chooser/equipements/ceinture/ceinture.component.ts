import {Component, OnInit} from '@angular/core'
import {CeintureHttpService} from './ceinture.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../shared/entities/Equipement'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Component({
  selector: 'dsb-equipements',
  templateUrl: './ceinture.component.html',
  styles: [],
  providers: [
    CeintureHttpService
  ]
})
export class CeintureComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private ceintureHttpService: CeintureHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.ceintureHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    this.stuffService.ceinture = this.equipements[index].imgUrl
    this.stuffService.listIdEquipment = [this.equipements[index].id]
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
