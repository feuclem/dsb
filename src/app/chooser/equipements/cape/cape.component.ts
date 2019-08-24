import {Component, OnInit} from '@angular/core'
import {CapeHttpService} from './cape.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../shared/entities/Equipement'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Component({
  selector: 'dsb-equipements',
  templateUrl: './cape.component.html',
  styles: [],
  providers: [
    CapeHttpService
  ]
})
export class CapeComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private capeHttpService: CapeHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.capeHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    this.stuffService.cape = this.equipements[index].imgUrl
    this.stuffService.listIdEquipment = [this.equipements[index].id]
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
