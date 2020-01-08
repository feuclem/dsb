import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'
import {PanoplieCharacteristiqueService} from '../../shared/service/panoplieCharacteristique.service'

@Component({
  selector: 'dsb-characteristique3',
  templateUrl: './characteristique3.component.html',
  styles: ['span {color: white}']
})
export class Characteristique3Component implements OnInit {

  fuite: number
  tacle: number
  esquivePa: number
  esquivePm: number
  retraitPa: number
  retraitPm: number

  panoplieFuite: number
  panoplieTacle: number
  panoplieEsquivePa: number
  panoplieEsquivePm: number
  panoplieRetraitPa: number
  panoplieRetraitPm: number

  constructor(
    private characteritiqueService: CharacteristiqueService,
    private panoplieCharacteristiqueService: PanoplieCharacteristiqueService
  ) { }

  ngOnInit() {
    this.characteritiqueService._fuite.subscribe(value => this.fuite = value)
    this.panoplieCharacteristiqueService._fuite.subscribe(value => this.panoplieFuite = value)
    this.characteritiqueService._tacle.subscribe(value => this.tacle = value)
    this.panoplieCharacteristiqueService._tacle.subscribe(value => this.panoplieTacle = value)
    this.characteritiqueService._esquivePa.subscribe(value => this.esquivePa = value)
    this.panoplieCharacteristiqueService._esquivePa.subscribe(value => this.panoplieEsquivePa = value)
    this.characteritiqueService._esquivePm.subscribe(value => this.esquivePm = value)
    this.panoplieCharacteristiqueService._esquivePm.subscribe(value => this.panoplieEsquivePm = value)
    this.characteritiqueService._retraitPa.subscribe(value => this.retraitPa = value)
    this.panoplieCharacteristiqueService._retraitPa.subscribe(value => this.panoplieRetraitPa = value)
    this.characteritiqueService._retraitPm.subscribe(value => this.retraitPm = value)
    this.panoplieCharacteristiqueService._retraitPm.subscribe(value => this.panoplieRetraitPm = value)
  }
}
