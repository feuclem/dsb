import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'
import {StuffWatcherService} from '../stuff.watcher.service'
import {Equipement} from '../../shared/entities/Equipement'

@Component({
  selector: 'dsb-stuff1',
  templateUrl: './stuff1.component.html',
  styles: ['.customizedButtonPosition { margin-top: 20px; } .is-200x200 { width: 200px; height: 200px; } .customizedContent { background-color: white; border-radius: 4px;}']
})
export class Stuff1Component implements OnInit {

  arme: Equipement
  amulette: Equipement
  anneau1: Equipement
  anneau2: Equipement
  ceinture: Equipement
  cape: Equipement
  coiffe: Equipement
  bottes: Equipement
  familier: Equipement
  monture: Equipement
  bouclier: Equipement

  constructor(
    private stuffService: StuffService,
    private stuffWatcherService: StuffWatcherService
  ) {}

  ngOnInit() {
    this.stuffService.getArme().subscribe(value => this.arme = value)
    this.stuffService.getAmulette().subscribe(value => this.amulette = value)
    this.stuffService.getAnneau1().subscribe(value => this.anneau1 = value)
    this.stuffService.getAnneau2().subscribe(value => this.anneau2 = value)
    this.stuffService.getCeinture().subscribe(value => this.ceinture = value)
    this.stuffService.getCape().subscribe(value => this.cape = value)
    this.stuffService.getCoiffe().subscribe(value => this.coiffe = value)
    this.stuffService.getBottes().subscribe(value => this.bottes = value)
    this.stuffService.getFamilier().subscribe(value => this.familier = value)
    this.stuffService.getMonture().subscribe(value => this.monture = value)
    this.stuffService.getBouclier().subscribe(value => this.bouclier = value)

    this.stuffService.initStuff()
  }

  removeAmulette(equipement: Equipement) {
    this.stuffService.updateAmulette(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeAnneau1(equipement: Equipement) {
    this.stuffService.updateAnneau1(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeAnneau2(equipement: Equipement) {
    this.stuffService.updateAnneau2(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeCeinture(equipement: Equipement) {
    this.stuffService.updateCeinture(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeBottes(equipement: Equipement) {
    this.stuffService.updateBottes(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeCoiffe(equipement: Equipement) {
    this.stuffService.updateCoiffe(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeCape(equipement: Equipement) {
    this.stuffService.updateCape(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeArme(equipement: Equipement) {
    this.stuffService.updateArme(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeBouclier(equipement: Equipement) {
    this.stuffService.updateBouclier(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removePets(equipement: Equipement, type: String) {
    if (type === 'Monture') {
      this.stuffService.updateMonture(undefined)
    } else {
      this.stuffService.updateFamilier(undefined)
    }
    this.stuffService.unsetItemStat(equipement)
  }

  updateStuffViewer(value: Equipement) {
    this.stuffWatcherService.updateSelectedStuffToWatch(value)
  }

}
