import {Component, OnInit} from '@angular/core'
import {MontureHttpService} from './monture.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {CharacteritiqueService} from '../../../shared/characteritique.service'
import {Equipements} from '../../../domain/Equipements'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Component({
  selector: 'mcb-equipements',
  templateUrl: './monture.component.html',
  styles: [],
  providers: [
    MontureHttpService
  ]
})
export class MontureComponent implements OnInit {

  equipements: Equipements[]

  constructor(
    private router: Router,
    private equipementsHttpService: MontureHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.equipementsHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    this.stuffService.monture = this.equipements[index].imgUrl
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
