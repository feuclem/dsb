import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'
import {StuffViewModel} from '../StuffViewModel'
import {StatistiquesService} from '../../shared/service/statistiques.service'

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
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
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
  }

  removeAmulette(stuffViewModel: StuffViewModel) {
    this.stuffService.updateAmulette(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeAnneau1(stuffViewModel: StuffViewModel) {
    this.stuffService.updateAnneau1(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeAnneau2(stuffViewModel: StuffViewModel) {
    this.stuffService.updateAnneau2(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeCeinture(stuffViewModel: StuffViewModel) {
    this.stuffService.updateCeinture(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeBottes(stuffViewModel: StuffViewModel) {
    this.stuffService.updateBottes(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeCoiffe(stuffViewModel: StuffViewModel) {
    this.stuffService.updateCoiffe(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeCape(stuffViewModel: StuffViewModel) {
    this.stuffService.updateCape(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeArme(stuffViewModel: StuffViewModel) {
    this.stuffService.updateArme(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeBouclier(stuffViewModel: StuffViewModel) {
    this.stuffService.updateBouclier(undefined)
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removePets(stuffViewModel: StuffViewModel, type: String) {
    if (type === 'Monture') {
      this.stuffService.updateMonture(undefined)
      stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    } else {
      this.stuffService.updateFamilier(undefined)
    }
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

}
