import {Component, OnInit} from '@angular/core'
import {MontureHttpService} from './monture.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../shared/entities/Equipement'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Component({
  selector: 'dsb-equipements',
  templateUrl: './monture.component.html',
  styles: [],
  providers: [
    MontureHttpService
  ]
})
export class MontureComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private montureHttpService: MontureHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.montureHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    this.stuffService.monture = this.equipements[index].imgUrl
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
