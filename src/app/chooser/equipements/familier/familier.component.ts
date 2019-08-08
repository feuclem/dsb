import {Component, OnInit} from '@angular/core'
import {FamilierHttpService} from './familier.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../domain/Equipement'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Component({
  selector: 'mcb-equipements',
  templateUrl: './familier.component.html',
  styles: [],
  providers: [
    FamilierHttpService
  ]
})
export class FamilierComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private equipementsHttpService: FamilierHttpService,
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
    this.stuffService.familier = this.equipements[index].imgUrl
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
