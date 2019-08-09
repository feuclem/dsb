import {Component, OnInit} from '@angular/core'
import {AnneauHttpService} from './anneau.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../shared/entities/Equipement'
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

  equipements: Equipement[]

  constructor(
    private router: Router,
    private anneauHttpService: AnneauHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.anneauHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    if (this.stuffService.anneau1 === '') {
      this.stuffService.anneau1 = this.equipements[index].imgUrl
    } else {
      this.stuffService.anneau2 = this.equipements[index].imgUrl
    }
    this.stuffService.listIdEquipment = [this.equipements[index].id]
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
