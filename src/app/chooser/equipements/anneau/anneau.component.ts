import {Component, OnInit} from '@angular/core'
import {AnneauHttpService} from './anneau.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {CharacteritiqueService} from '../../../shared/characteritique.service'
import {Equipements} from '../../../../domain/Equipements'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Component({
  selector: 'mcb-equipements',
  templateUrl: './anneau.component.html',
  styles: [],
  providers: [
    AnneauHttpService
  ]
})
export class AnneauComponent implements OnInit {

  equipements: Equipements[]

  constructor(
    private router: Router,
    private equipementsHttpService: AnneauHttpService,
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
    if (this.stuffService.anneau1 === '') {
      this.stuffService.anneau1 = this.equipements[index].imgUrl
    } else {
      this.stuffService.anneau2 = this.equipements[index].imgUrl
    }
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
