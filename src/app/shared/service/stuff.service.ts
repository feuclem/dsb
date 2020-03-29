import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Observable} from 'rxjs/Observable'
import {StuffEquipementId} from '../entities/StuffEquipementId'
import {Equipement} from '../entities/Equipement'
import {
  AMULETTE,
  ANNEAU1, BOTTES, BOUCLIER, CAPE,
  CEINTURE,
  COIFFE,
  FAMILIER,
  MONTURE,
  SLOT1,
  SLOT2,
  SLOT3,
  SLOT4,
  SLOT5,
  SLOT6
} from './localstorage/localstore.constants'
import {Statistique} from '../entities/Statistique'
import {EquipementsHttpService} from '../httpService/equipements.http.service'
import {StatistiquesService} from './statistiques.service'

@Injectable()
export class StuffService {

  constructor(
    private statistiquesService: StatistiquesService
  ) {
  }

  _arme = new BehaviorSubject<Equipement>(undefined)
  _amulette = new BehaviorSubject<Equipement>(undefined)
  _anneau1 = new BehaviorSubject<Equipement>(undefined)
  _anneau2 = new BehaviorSubject<Equipement>(undefined)
  _bottes = new BehaviorSubject<Equipement>(undefined)
  _ceinture = new BehaviorSubject<Equipement>(undefined)
  _coiffe = new BehaviorSubject<Equipement>(undefined)
  _cape = new BehaviorSubject<Equipement>(undefined)
  _monture = new BehaviorSubject<Equipement>(undefined)
  _familier = new BehaviorSubject<Equipement>(undefined)
  _bouclier = new BehaviorSubject<Equipement>(undefined)
  _slot1 = new BehaviorSubject<Equipement>(undefined)
  _slot2 = new BehaviorSubject<Equipement>(undefined)
  _slot3 = new BehaviorSubject<Equipement>(undefined)
  _slot4 = new BehaviorSubject<Equipement>(undefined)
  _slot5 = new BehaviorSubject<Equipement>(undefined)
  _slot6 = new BehaviorSubject<Equipement>(undefined)

  initStuff1() {
    if (
      localStorage.getItem(AMULETTE) !== 'undefined' &&
      localStorage.getItem(AMULETTE) !== undefined &&
      localStorage.getItem(AMULETTE) !== null
    ) {
      const storedValue = JSON.parse(localStorage.getItem(AMULETTE))
      console.log(JSON.parse(localStorage.getItem(AMULETTE)))
      console.log(storedValue['stats'])
      const stats: Statistique[] = []
      for (let i = 0; i <= storedValue['stats'].length; i++) {
        if (storedValue['stats'][i] !== undefined) {
          stats.push(
            new Statistique(
              storedValue['stats'][i]['from'],
              storedValue['stats'][i]['to'],
              storedValue['stats'][i]['label']
            )
          )
        }
      }
      const equipement = new Equipement(
        storedValue['id'],
        storedValue['name'],
        storedValue['lvl'],
        storedValue['type'],
        storedValue['imgUrl'],
        stats,
        storedValue['setId']
      )
      this.updateAmulette(equipement)
      this.setItemStat(equipement)
    }
  }

  setItemStat(equipement: Equipement) {
    this.updateListStuffEquipmentId(new StuffEquipementId(equipement.id, equipement.type))
    equipement.stats.map(stat => this.statistiquesService.setStatInStuff(stat))
  }

  updateArme(value: Equipement): void {
    this._arme.next(value)
  }

  getArme(): Observable<Equipement> {
    return this._arme.asObservable()
  }

  updateAmulette(value: Equipement): void {
    this._amulette.next(value)
  }

  getAmulette(): Observable<Equipement> {
    return this._amulette.asObservable()
  }

  updateAnneau1(value: Equipement): void {
    localStorage.setItem(ANNEAU1, JSON.stringify(value))
    this._anneau1.next(value)
  }

  getAnneau1(): Observable<Equipement> {
    return this._anneau1.asObservable()
  }

  updateAnneau2(value: Equipement): void {
    this._anneau2.next(value)
  }

  getAnneau2(): Observable<Equipement> {
    return this._anneau2.asObservable()
  }

  updateBottes(value: Equipement): void {
    localStorage.setItem(BOTTES, JSON.stringify(value))
    this._bottes.next(value)
  }

  getBottes(): Observable<Equipement> {
    return this._bottes.asObservable()
  }

  updateCeinture(value: Equipement): void {
    localStorage.setItem(CEINTURE, JSON.stringify(value))
    this._ceinture.next(value)
  }

  getCeinture(): Observable<Equipement> {
    return this._ceinture.asObservable()
  }

  updateCoiffe(value: Equipement): void {
    localStorage.setItem(COIFFE, JSON.stringify(value))
    this._coiffe.next(value)
  }

  getCoiffe(): Observable<Equipement> {
    return this._coiffe.asObservable()
  }

  updateCape(value: Equipement): void {
    localStorage.setItem(CAPE, JSON.stringify(value))
    this._cape.next(value)
  }

  getCape(): Observable<Equipement> {
    return this._cape.asObservable()
  }

  updateMonture(value: Equipement): void {
    localStorage.setItem(MONTURE, JSON.stringify(value))
    this._monture.next(value)
  }

  getMonture(): Observable<Equipement> {
    return this._monture.asObservable()
  }

  updateFamilier(value: Equipement): void {
    localStorage.setItem(FAMILIER, JSON.stringify(value))
    this._familier.next(value)
  }

  getFamilier(): Observable<Equipement> {
    return this._familier.asObservable()
  }

  updateBouclier(value: Equipement): void {
    localStorage.setItem(BOUCLIER, JSON.stringify(value))
    this._bouclier.next(value)
  }

  getBouclier(): Observable<Equipement> {
    return this._bouclier.asObservable()
  }

  updateSlots(value: Equipement): void {
    if (this._slot1.value === undefined) {
      localStorage.setItem(SLOT1, JSON.stringify(value))
      this.updateSlot1(value)
    } else if (this._slot2.value === undefined) {
      localStorage.setItem(SLOT2, JSON.stringify(value))
      this.updateSlot2(value)
    } else if (this._slot3.value === undefined) {
      localStorage.setItem(SLOT3, JSON.stringify(value))
      this.updateSlot3(value)
    } else if (this._slot4.value === undefined) {
      localStorage.setItem(SLOT4, JSON.stringify(value))
      this.updateSlot4(value)
    } else if (this._slot5.value === undefined) {
      localStorage.setItem(SLOT5, JSON.stringify(value))
      this.updateSlot5(value)
    } else {
      localStorage.setItem(SLOT6, JSON.stringify(value))
      this.updateSlot6(value)
    }
  }

  updateSlot1(value: Equipement): void {
    this._slot1.next(value)
  }

  getSlot1(): Observable<Equipement> {
    return this._slot1.asObservable()
  }

  updateSlot2(value: Equipement): void {
    this._slot2.next(value)
  }

  getSlot2(): Observable<Equipement> {
    return this._slot2.asObservable()
  }

  updateSlot3(value: Equipement): void {
    this._slot3.next(value)
  }

  getSlot3(): Observable<Equipement> {
    return this._slot3.asObservable()
  }

  updateSlot4(value: Equipement): void {
    this._slot4.next(value)
  }

  getSlot4(): Observable<Equipement> {
    return this._slot4.asObservable()
  }

  updateSlot5(value: Equipement): void {
    this._slot5.next(value)
  }

  getSlot5(): Observable<Equipement> {
    return this._slot5.asObservable()
  }

  updateSlot6(value: Equipement): void {
    this._slot6.next(value)
  }

  getSlot6(): Observable<Equipement> {
    return this._slot6.asObservable()
  }

  _listStuffEquipmentId = new BehaviorSubject<StuffEquipementId[]>([])

  getListStuffEquipmentId(): Observable<StuffEquipementId[]> {
    return this._listStuffEquipmentId.asObservable()
  }

  updateListStuffEquipmentId(value: StuffEquipementId): void {
    this._listStuffEquipmentId.getValue().push(value)
    this._listStuffEquipmentId.next(this._listStuffEquipmentId.getValue())
  }

  removeStuffFromListEquipmentId(idEquipement: number) {
    const equipementId = this._listStuffEquipmentId.getValue().findIndex(stuffEquipementId => stuffEquipementId.id === idEquipement)
    this._listStuffEquipmentId.getValue().splice(equipementId, 1)
    this._listStuffEquipmentId.next(this._listStuffEquipmentId.getValue())
  }
}
