import { Component, OnInit } from '@angular/core';
import {CharacteritiqueService} from '../../shared/service/characteritique.service'

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
    private characteritiqueService: CharacteritiqueService
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
