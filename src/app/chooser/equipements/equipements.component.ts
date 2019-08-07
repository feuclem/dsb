import {Component, OnInit} from '@angular/core'
import {EquipementsHttpService} from './equipements.http.service'
import {StuffService} from '../../shared/stuff.service'
import {Router} from '@angular/router'
import {CharacteritiqueService} from '../../shared/characteritique.service'
import {Equipements} from '../../../domain/Equipements'

@Component({
  selector: 'mcb-equipements',
  templateUrl: './equipements.component.html',
  styles: [],
  providers: [
    EquipementsHttpService
  ]
})
export class EquipementsComponent implements OnInit {

  equipements: Equipements[]

  constructor(
    private router: Router,
    private equipementsHttpService: EquipementsHttpService,
    private stuffService: StuffService,
    private characteritiqueService: CharacteritiqueService
  ) {
  }

  ngOnInit() {
    this.equipementsHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    this.stuffService.arme = this.equipements[index].imgUrl
    this.equipements[index].stats.map(stat => {
      if (stat.label === 'Force') {
        this.characteritiqueService.force = stat.to
      }
    })
    this.router.navigate(['/'])
  }

}
