import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/stuff.service'

@Component({
  selector: 'dsb-stuff1',
  templateUrl: './stuff1.component.html',
  styles: []
})
export class Stuff1Component implements OnInit {

  arme: string
  amulette: string
  anneau1: string
  anneau2: string
  ceinture: string
  cape: string
  coiffe: string
  bottes: string
  familier: string
  monture: string
  bouclier: string

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

}
