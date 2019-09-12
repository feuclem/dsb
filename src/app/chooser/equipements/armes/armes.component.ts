import {Component, OnInit} from '@angular/core'
import {ArmesHttpService} from './armes.http.service'
import {Arme} from '../../../shared/entities/Arme'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Component({
  selector: 'armes',
  templateUrl: './armes.component.html',
  providers: [ArmesHttpService]
})
export class ArmesComponent implements OnInit {

  armes: Arme[]

  constructor(
    private router: Router,
    private armesService: ArmesHttpService,
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService) {
  }

  ngOnInit() {
    this.armesService.getAllArmes().then(response => {
      this.armes = response
    })
  }

  setBuild(index: number) {
    this.stuffService.arme = this.armes[index].imgUrl
    this.armes[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }
}
