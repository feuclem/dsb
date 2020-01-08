import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'
import {PanoplieCharacteristiqueService} from '../../shared/service/panoplieCharacteristique.service'

@Component({
  selector: 'dsb-characteristique2',
  templateUrl: './characteristique2.component.html',
  styles: ['span {color: white}']
})
export class Characteristique2Component implements OnInit {

  dommages: number
  dommagesNeutre: number
  dommagesTerre: number
  dommagesFeu: number
  dommagesEau: number
  dommagesAir: number

  panoplieDommages: number
  panoplieDommagesNeutre: number
  panoplieDommagesTerre: number
  panoplieDommagesFeu: number
  panoplieDommagesEau: number
  panoplieDommagesAir: number

  dommagesMelee: number
  dommagesDistance: number
  dommagesAuxSorts: number
  dommagesCritiques: number
  dommagesPoussee: number

  panoplieDommagesMelee: number
  panoplieDommagesDistance: number
  panoplieDommagesAuxSorts: number
  panoplieDommagesCritiques: number
  panoplieDommagesPoussee: number

  constructor(
    private characteritiqueService: CharacteristiqueService,
    private panoplieCharacteristiqueService: PanoplieCharacteristiqueService
  ) { }

  ngOnInit() {
    this.characteritiqueService._dommages.subscribe(value => this.dommages = value)
    this.panoplieCharacteristiqueService._dommages.subscribe(value => this.panoplieDommages = value)
    this.characteritiqueService._dommagesNeutre.subscribe(value => this.dommagesNeutre = value)
    this.panoplieCharacteristiqueService._dommagesNeutre.subscribe(value => this.panoplieDommagesNeutre = value)
    this.characteritiqueService._dommagesTerre.subscribe(value => this.dommagesTerre = value)
    this.panoplieCharacteristiqueService._dommagesTerre.subscribe(value => this.panoplieDommagesTerre = value)
    this.characteritiqueService._dommagesFeu.subscribe(value => this.dommagesFeu = value)
    this.panoplieCharacteristiqueService._dommagesFeu.subscribe(value => this.panoplieDommagesFeu = value)
    this.characteritiqueService._dommagesEau.subscribe(value => this.dommagesEau = value)
    this.panoplieCharacteristiqueService._dommagesEau.subscribe(value => this.panoplieDommagesEau = value)
    this.characteritiqueService._dommagesAir.subscribe(value => this.dommagesAir = value)
    this.panoplieCharacteristiqueService._dommagesAir.subscribe(value => this.panoplieDommagesAir = value)
    this.characteritiqueService._dommagesMelee.subscribe(value => this.dommagesMelee = value)
    this.panoplieCharacteristiqueService._dommagesMelee.subscribe(value => this.panoplieDommagesMelee = value)
    this.characteritiqueService._dommagesDistance.subscribe(value => this.dommagesDistance = value)
    this.panoplieCharacteristiqueService._dommagesDistance.subscribe(value => this.panoplieDommagesDistance = value)
    this.characteritiqueService._dommagesAuxSorts.subscribe(value => this.dommagesAuxSorts = value)
    this.panoplieCharacteristiqueService._dommagesAuxSorts.subscribe(value => this.panoplieDommagesAuxSorts = value)
    this.characteritiqueService._dommagesCritiques.subscribe(value => this.dommagesCritiques = value)
    this.panoplieCharacteristiqueService._dommagesCritiques.subscribe(value => this.panoplieDommagesCritiques = value)
    this.characteritiqueService._dommagesPoussee.subscribe(value => this.dommagesPoussee = value)
    this.panoplieCharacteristiqueService._dommagesPoussee.subscribe(value => this.panoplieDommagesPoussee = value)
  }
}


