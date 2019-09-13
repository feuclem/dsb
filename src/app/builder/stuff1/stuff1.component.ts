import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'
import {StuffViewModel} from '../StuffViewModel'

@Component({
  selector: 'dsb-stuff1',
  templateUrl: './stuff1.component.html',
  styles: ['a { color: white } margin-top-32 {margin-top: 32px !important;}']
})
export class Stuff1Component implements OnInit {

  arme: StuffViewModel
  amulette: StuffViewModel
  anneau1: StuffViewModel
  anneau2: StuffViewModel
  ceinture: StuffViewModel
  cape: StuffViewModel
  coiffe: StuffViewModel
  bottes: StuffViewModel
  familier: StuffViewModel
  monture: StuffViewModel
  bouclier: StuffViewModel

  constructor(
    private stuffService: StuffService
  ) {
  }

  ngOnInit() {
    this.arme = this.stuffService.arme
    this.amulette = this.stuffService.amulette
    this.anneau1 = this.stuffService.anneau1
    this.anneau2 = this.stuffService.anneau2
    this.ceinture = this.stuffService.ceinture
    this.cape = this.stuffService.cape
    this.coiffe = this.stuffService.coiffe
    this.bottes = this.stuffService.bottes
    this.familier = this.stuffService.familier
    this.monture = this.stuffService.monture
    this.bouclier = this.stuffService.bouclier
  }

  removeItem(idEquipement: number) {

  }

}
