import { Component, OnInit } from '@angular/core';
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
    this.fuite = this.characteritiqueService.fuite
    this.tacle = this.characteritiqueService.tacle
    this.esquivePa = this.characteritiqueService.esquivePA
    this.esquivePm = this.characteritiqueService.esquivePM
    this.retraitPa = this.characteritiqueService.retraitPA
    this.retraitPm = this.characteritiqueService.retraitPM
  }

}
