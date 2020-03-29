import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'
import {StuffWatcherService} from '../stuff.watcher.service'
import {Equipement} from '../../shared/entities/Equipement'
import {StatistiquesService} from '../../shared/service/statistiques.service'

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
    private statistiquesService: StatistiquesService,
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

    this.stuffService.initStuff1()
  }

  removeAmulette(equipement: Equipement) {
    this.stuffService.updateAmulette(undefined)
    equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removeAnneau1(equipement: Equipement) {
    this.stuffService.updateAnneau1(undefined)
    equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removeAnneau2(equipement: Equipement) {
    this.stuffService.updateAnneau2(undefined)
    equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removeCeinture(equipement: Equipement) {
    this.stuffService.updateCeinture(undefined)
    equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removeBottes(equipement: Equipement) {
    this.stuffService.updateBottes(undefined)
    equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removeCoiffe(equipement: Equipement) {
    this.stuffService.updateCoiffe(undefined)
    equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removeCape(equipement: Equipement) {
    this.stuffService.updateCape(undefined)
    equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removeArme(equipement: Equipement) {
    this.stuffService.updateArme(undefined)
    equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removeBouclier(equipement: Equipement) {
    this.stuffService.updateBouclier(undefined)
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  removePets(equipement: Equipement, type: String) {
    if (type === 'Monture') {
      this.stuffService.updateMonture(undefined)
      equipement.stats.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    } else {
      this.stuffService.updateFamilier(undefined)
    }
    this.stuffService.removeStuffFromListEquipmentId(equipement.id)
  }

  updateStuffViewer(value: Equipement) {
    this.stuffWatcherService.updateSelectedStuffToWatch(value)
  }

}
