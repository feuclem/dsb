import {Component, OnInit} from '@angular/core'
import {ArmesServiceHttp} from './armes.service.http'
import {Arme} from '../../../domain/Arme'
import {StuffService} from '../../shared/stuff.service'
import {log} from 'util'
import {CharacteritiqueService} from '../../shared/characteritique.service'

@Component({
  selector: 'armes',
  templateUrl: './armes.component.html',
  styles: [],
  providers: [ArmesServiceHttp]
})
export class ArmesComponent implements OnInit {

  armes: Arme[]

  constructor(
    private armesService: ArmesServiceHttp,
    private stuffService: StuffService,
    private characteritiqueService: CharacteritiqueService) {
  }

  ngOnInit() {
    this.armesService.getAllArmes().then(response => {
      this.armes = response
    })
  }

  setBuild(index: number) {
    this.stuffService.arme = this.armes[index].imgUrl
    this.armes[index].stats.map(stat => {
      if (stat.label === 'Force') {
        this.characteritiqueService.force = stat.to
      }
    })
  }
}
