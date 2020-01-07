import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'
import {StuffViewModel} from '../StuffViewModel'
import {validate} from 'codelyzer/walkerFactory/walkerFn'
import {v} from '@angular/core/src/render3'

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
    this.stuffService.getArme().subscribe(value => this.arme = value)
    this.stuffService.getAmulette().subscribe(value => this.amulette = value)
    this.stuffService.getAnneau1().subscribe(value => this.anneau1 = value)
    this.stuffService.getAnneau2().subscribe(value => this.anneau2 = value)
    this.stuffService.getCeinture().subscribe(value => this.ceinture = value)
    this.stuffService.getCape().subscribe(value => this.cape = value)
    this.stuffService.getCoiffe().subscribe(value => this.coiffe = value)
    this.stuffService.getBottes().subscribe(value => this.bottes = value)
    this.familier = this.stuffService.familier
    this.stuffService.getMonture().subscribe(value => this.monture = value)
    this.bouclier = this.stuffService.bouclier
  }

  removeAmulette(equipementId: number) {
      this.stuffService.updateAmulette(undefined)
      this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removeAnneau1(equipementId: number) {
    this.stuffService.updateAnneau1(undefined)
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removeAnneau2(equipementId: number) {
    this.stuffService.updateAnneau2(undefined)
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removeCeinture(equipementId: number) {
    this.stuffService.updateCeinture(undefined)
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removeBottes(equipementId: number) {
    this.stuffService.updateBottes(undefined)
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removeCoiffe(equipementId: number) {
    this.stuffService.updateCoiffe(undefined)
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removeCape(equipementId: number) {
    this.stuffService.updateCape(undefined)
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removeArme(equipementId: number) {
    this.stuffService.updateArme(undefined)
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removeBouclier(equipementId: number) {
    this.stuffService.bouclier = undefined
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

  removePets(equipementId: number, type: String) {
    if(type === 'Monture') {
      this.stuffService.updateMonture(undefined)
    } else {
      this.stuffService.familier = undefined
    }
    this.stuffService.removeStuffFromListEquipmentId = equipementId
  }

}
