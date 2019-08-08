import {Component, OnInit} from '@angular/core'
import {BouclierHttpService} from './bouclier.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {CharacteritiqueService} from '../../../shared/characteritique.service'
import {Equipements} from '../../../domain/Equipements'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Component({
  selector: 'mcb-equipements',
  templateUrl: './bouclier.component.html',
  styles: [],
  providers: [
    BouclierHttpService
  ]
})
export class BouclierComponent implements OnInit {

  equipements: Equipements[]

  constructor(
    private router: Router,
    private equipementsHttpService: BouclierHttpService,
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
    this.stuffService.bouclier = this.equipements[index].imgUrl
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
