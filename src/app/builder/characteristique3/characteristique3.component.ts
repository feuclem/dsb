import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'

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

  constructor(
    private characteritiqueService: CharacteristiqueService
  ) { }

  ngOnInit() {
    this.getFuite()
    this.getTacle()
    this.getEsquivePa()
    this.getEsquivePm()
    this.getRetraitPa()
    this.getRetraitPm()
  }

  getFuite() {
    this.characteritiqueService._fuite.subscribe(value => this.fuite = value)
  }
  getTacle() {
    this.characteritiqueService._tacle.subscribe(value => this.tacle = value)
  }
  getEsquivePa() {
    this.characteritiqueService._esquivePa.subscribe(value => this.esquivePa = value)
  }
  getEsquivePm() {
    this.characteritiqueService._esquivePm.subscribe(value => this.esquivePm = value)
  }
  getRetraitPa() {
    this.characteritiqueService._retraitPa.subscribe(value => this.retraitPa = value)
  }
  getRetraitPm() {
    this.characteritiqueService._retraitPm.subscribe(value => this.retraitPm = value)
  }
}
