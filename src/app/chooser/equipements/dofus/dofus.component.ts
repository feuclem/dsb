import {Component, OnInit} from '@angular/core'
import {DofusHttpService} from './dofus.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../domain/Equipement'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Component({
  selector: 'mcb-equipements',
  templateUrl: './dofus.component.html',
  styles: [],
  providers: [
    DofusHttpService
  ]
})
export class DofusComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private equipementsHttpService: DofusHttpService,
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
    if (this.stuffService.slot1 === '') {
      this.stuffService.slot1 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot2 === '') {
      this.stuffService.slot2 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot3 === '') {
      this.stuffService.slot3 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot4 === '') {
      this.stuffService.slot4 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot5 === '') {
      this.stuffService.slot5 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot6 === '') {
      this.stuffService.slot6 = this.equipements[index].imgUrl
    }
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
