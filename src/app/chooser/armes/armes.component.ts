import {Component, OnInit} from '@angular/core'
import {ArmesHttpService} from './armes.http.service'
import {Arme} from '../../../domain/Arme'
import {StuffService} from '../../shared/stuff.service'
import {log} from 'util'
import {CharacteritiqueService} from '../../shared/characteritique.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../shared/statistiques.service'

@Component({
  selector: 'armes',
  templateUrl: './armes.component.html',
  styles: [],
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
