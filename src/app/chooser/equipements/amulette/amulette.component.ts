import {Component, OnInit} from '@angular/core'
import {AmuletteHttpService} from './amulette.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {CharacteritiqueService} from '../../../shared/characteritique.service'
import {Equipements} from '../../../domain/Equipements'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Component({
  selector: 'mcb-equipements',
  templateUrl: './amulette.component.html',
  styles: [],
  providers: [
    AmuletteHttpService
  ]
})
export class AmuletteComponent implements OnInit {

  equipements: Equipements[]

  constructor(
    private router: Router,
    private equipementsHttpService: AmuletteHttpService,
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
    this.stuffService.amulette = this.equipements[index].imgUrl
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
