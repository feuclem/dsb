import {Component, OnInit} from '@angular/core'
import {AmuletteHttpService} from './amulette.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../shared/entities/Equipement'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Component({
  selector: 'dsb-equipements',
  templateUrl: './amulette.component.html',
  styles: [],
  providers: [
    AmuletteHttpService
  ]
})
export class AmuletteComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private amuletteHttpService: AmuletteHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.amuletteHttpService.getAllEquipements().then(response => {
      this.equipements = response
    }).then(() => console.log(this.equipements))
  }

  setBuild(index: number) {
    this.stuffService.amulette = this.equipements[index].imgUrl
    this.stuffService.listIdEquipment = [this.equipements[index].id]
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
