import {Component, OnInit} from '@angular/core'
import {BottesHttpService} from './bottes.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {Equipement} from '../../../shared/entities/Equipement'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Component({
  selector: 'dsb-equipements',
  templateUrl: './bottes.component.html',
  styles: [],
  providers: [
    BottesHttpService
  ]
})
export class BottesComponent implements OnInit {

  equipements: Equipement[]

  constructor(
    private router: Router,
    private bottesHttpService: BottesHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  ngOnInit() {
    this.bottesHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    this.stuffService.bottes = this.equipements[index].imgUrl
    this.stuffService.listIdEquipment = [this.equipements[index].id]
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

}
