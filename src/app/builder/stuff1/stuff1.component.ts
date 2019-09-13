import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'

@Component({
  selector: 'dsb-stuff1',
  templateUrl: './stuff1.component.html',
  styles: ['a { color: white } margin-top-32 {margin-top: 32px !important;}']
})
export class Stuff1Component implements OnInit {

  arme: String
  amulette: String
  anneau1: String
  anneau2: String
  ceinture: String
  cape: String
  coiffe: String
  bottes: String
  familier: String
  monture: String
  bouclier: String

  constructor(
    private stuffService: StuffService
  ) {
  }

  ngOnInit() {
    this.arme = this.stuffService.arme ? this.stuffService.arme.imgUrl : ''
    this.amulette = this.stuffService.amulette ? this.stuffService.amulette.imgUrl : ''
    this.anneau1 = this.stuffService.anneau1 ? this.stuffService.anneau1.imgUrl : ''
    this.anneau2 = this.stuffService.anneau2 ? this.stuffService.anneau2.imgUrl : ''
    this.ceinture = this.stuffService.ceinture ? this.stuffService.ceinture.imgUrl : ''
    this.cape = this.stuffService.cape ? this.stuffService.cape.imgUrl : ''
    this.coiffe = this.stuffService.coiffe ? this.stuffService.coiffe.imgUrl : ''
    this.bottes = this.stuffService.bottes ? this.stuffService.bottes.imgUrl : ''
    this.familier = this.stuffService.familier ? this.stuffService.familier.imgUrl : ''
    this.monture = this.stuffService.monture ? this.stuffService.monture.imgUrl : ''
    this.bouclier = this.stuffService.bouclier ? this.stuffService.bouclier.imgUrl : ''
  }

}
