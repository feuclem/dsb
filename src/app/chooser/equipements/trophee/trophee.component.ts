import {Component, OnInit} from '@angular/core'
import {TropheeHttpService} from './trophee.http.service'
import {StuffService} from '../../../shared/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../shared/entities/Equipement'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Component({
  selector: 'mcb-equipements',
  templateUrl: './trophee.component.html',
  styles: [],
  providers: [
    TropheeHttpService
  ]
})
export class TropheeComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private tropheeHttpService: TropheeHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.tropheeHttpService.getAllEquipements().then(response => {
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
