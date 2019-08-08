import {Component, OnInit} from '@angular/core'
import {StuffService} from '../shared/stuff.service'
import {CharacteritiqueService} from '../shared/characteritique.service'
import {Iop} from '../domain/Iop'
import {Sorts} from '../domain/Sorts'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {

  arme: string
  amulette: string
  anneau1: string
  anneau2: string
  ceinture: string
  cape: string
  coiffe: string
  bottes: string
  familier: string
  monture: string
  bouclier: string

  force: number
  intelligence: number
  chance: number
  agilite: number
  vitalite: number
  puissance: number

  dommages: number
  dommagesTerre: number
  dommagesFeu: number
  dommagesEau: number
  dommagesAir: number
  dommagesCritique: number

  dommagesMelee: number
  dommagesDistance: number

  iop = new Iop()

  constructor(
    private stuffService: StuffService,
    private characteritiqueService: CharacteritiqueService) {
  }

  ngOnInit() {
    this.arme = this.stuffService.arme
    this.amulette = this.stuffService.amulette
    this.anneau1 = this.stuffService.anneau1
    this.anneau2 = this.stuffService.anneau2
    this.ceinture = this.stuffService.ceinture
    this.cape = this.stuffService.cape
    this.coiffe = this.stuffService.coiffe
    this.bottes = this.stuffService.bottes
    this.familier = this.stuffService.familier
    this.monture = this.stuffService.monture
    this.bouclier = this.stuffService.bouclier

    this.force = this.characteritiqueService.force
    this.intelligence = this.characteritiqueService.intelligence
    this.chance = this.characteritiqueService.chance
    this.agilite = this.characteritiqueService.agilite
    this.vitalite = this.characteritiqueService.vitalite
    this.puissance = this.characteritiqueService.puissance

    this.dommages = this.characteritiqueService.dommages
    this.dommagesTerre = this.characteritiqueService.dommagesTerre
    this.dommagesFeu = this.characteritiqueService.dommagesFeu
    this.dommagesEau = this.characteritiqueService.dommagesEau
    this.dommagesAir = this.characteritiqueService.dommagesAir
    this.dommagesCritique = this.characteritiqueService.dommagesCritique

    this.dommagesMelee = this.characteritiqueService.dommagesMelee
    this.dommagesDistance = this.characteritiqueService.dommagesDistance
  }

  calculDegatBase(degat: number, type: string): number {
    if (type === 'terre') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.force,
        this.dommages,
        this.dommagesTerre,
        0,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
    if (type === 'feu') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.intelligence,
        this.dommages,
        this.dommagesFeu,
        0,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
    if (type === 'eau') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.chance,
        this.dommages,
        this.dommagesEau,
        0,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
    if (type === 'air') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.agilite,
        this.dommages,
        this.dommagesAir,
        0,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
    if (type === 'air-feu') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.agilite + this.intelligence,
        this.dommages,
        this.dommagesAir + this.dommagesFeu,
        0,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
  }

  calculDegatCritique(degat: number, type: string): number {
    if (type === 'terre') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.force,
        this.dommages,
        this.dommagesTerre,
        this.dommagesCritique,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
    if (type === 'feu') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.intelligence,
        this.dommages,
        this.dommagesFeu,
        this.dommagesCritique,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
    if (type === 'eau') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.chance,
        this.dommages,
        this.dommagesEau,
        this.dommagesCritique,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
    if (type === 'air') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.agilite,
        this.dommages,
        this.dommagesAir,
        this.dommagesCritique,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
    if (type === 'air-feu') {
      return Sorts.calcul(
        degat,
        this.puissance,
        this.agilite + this.intelligence,
        this.dommages,
        this.dommagesAir + this.dommagesFeu,
        this.dommagesCritique,
        this.dommagesMelee,
        this.dommagesDistance
      )
    }
  }
}
