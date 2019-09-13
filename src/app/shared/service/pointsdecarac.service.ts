import {Injectable} from '@angular/core'
import {CharacteristiqueService} from './characteristique.service'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class PointsdecaracService {

  remainingPoints = 995

  _remainingPointsToUsed = new BehaviorSubject<number>(995)

  constructor(
    private characteristiqueService: CharacteristiqueService
  ) {
  }

  addPointToCharacteristique(points: number, charac: String) {
    if (this.remainingPoints > 0) {
      if (points > 398) {
        points = 398
      }
      if (this.remainingPoints >= points) {
        if (points >= 301) {
          this.remainingPoints = (this.remainingPoints - (points - (100 - (points - 200) - (points - 300))) - points)
        } else if (points <= 300 && points >= 201) {
          this.remainingPoints = (this.remainingPoints - (points - (100 - (points - 200))) - points)
        } else if (points <= 200 && points >= 100) {
          this.remainingPoints = (this.remainingPoints - points - (points - 100))
        } else {
          if ((this.remainingPoints - points) === 0) {
            this.remainingPoints = 0
          } else {
            this.remainingPoints = this.remainingPoints - points
          }
        }
      } else {
        points = points - (points - this.remainingPoints)
        this.remainingPoints = 0
      }

      this.updateRemainingPointsToUsed(this.remainingPoints)

      if (charac === 'Force') {
        this.characteristiqueService.updateForce(points)
      } else if (charac === 'Intelligence') {
        this.characteristiqueService.updateIntelligence(points)
      } else if (charac === 'Chance') {
        this.characteristiqueService.updateChance(points)
      } else if (charac === 'Agilite') {
        this.characteristiqueService.updateAgilite(points)
      } else if (charac === 'Sagesse') {
        this.characteristiqueService.updateSagesse(points)
      } else if (charac === 'Vitalite') {
        this.characteristiqueService.updateVitalite(points)
      }
    }
  }

  resetRemainingPoints() {
    this.characteristiqueService.resetVitalite()
    this.characteristiqueService.resetForce()
    this.characteristiqueService.resetIntelligence()
    this.characteristiqueService.resetChance()
    this.characteristiqueService.resetAgilite()
    this.updateRemainingPointsToUsed(995)
  }

  updateRemainingPointsToUsed(value: number): void {
    this._remainingPointsToUsed.next(value)
  }
}
