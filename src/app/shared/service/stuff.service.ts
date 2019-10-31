import {Injectable} from '@angular/core'
import {StuffViewModel} from '../../builder/StuffViewModel'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class StuffService {
  private _arme = new BehaviorSubject<StuffViewModel>(undefined)
  private _amulette = new BehaviorSubject<StuffViewModel>(undefined)
  private _anneau1 = new BehaviorSubject<StuffViewModel>(undefined)
  private _anneau2 = new BehaviorSubject<StuffViewModel>(undefined)
  private _bottes = new BehaviorSubject<StuffViewModel>(undefined)
  private _ceinture = new BehaviorSubject<StuffViewModel>(undefined)
  private _coiffe = new BehaviorSubject<StuffViewModel>(undefined)
  private _cape = new BehaviorSubject<StuffViewModel>(undefined)
  private _monture = new BehaviorSubject<StuffViewModel>(undefined)
  private _familier: StuffViewModel
  private _bouclier: StuffViewModel
  private _slot1: StuffViewModel
  private _slot2: StuffViewModel
  private _slot3: StuffViewModel
  private _slot4: StuffViewModel
  private _slot5: StuffViewModel
  private _slot6: StuffViewModel

  updateArme(value: StuffViewModel): void {
    this._arme.next(value)
  }

  getArme(): Observable<StuffViewModel> {
    return this._arme.asObservable()
  }

  updateAmulette(value: StuffViewModel): void {
    this._amulette.next(value)
  }

  getAmulette(): Observable<StuffViewModel> {
    return this._amulette.asObservable()
  }

  updateAnneau1(value: StuffViewModel): void {
    this._anneau1.next(value)
  }

  getAnneau1(): Observable<StuffViewModel> {
    return this._anneau1.asObservable()
  }

  updateAnneau2(value: StuffViewModel): void {
    this._anneau2.next(value)
  }

  getAnneau2(): Observable<StuffViewModel> {
    return this._anneau2.asObservable()
  }

  updateBottes(value: StuffViewModel): void {
    this._bottes.next(value)
  }

  getBottes(): Observable<StuffViewModel> {
    return this._bottes.asObservable()
  }

  updateCeinture(value: StuffViewModel): void {
    this._ceinture.next(value)
  }

  getCeinture(): Observable<StuffViewModel> {
    return this._ceinture.asObservable()
  }

  updateCoiffe(value: StuffViewModel): void {
    this._coiffe.next(value)
  }

  getCoiffe(): Observable<StuffViewModel> {
    return this._coiffe.asObservable()
  }

  updateCape(value: StuffViewModel): void {
    this._cape.next(value)
  }

  getCape(): Observable<StuffViewModel> {
    return this._cape.asObservable()
  }

  updateMonture(value: StuffViewModel): void {
    this._monture.next(value)
  }

  getMonture(): Observable<StuffViewModel> {
    return this._monture.asObservable()
  }

  get familier(): StuffViewModel {
    return this._familier
  }

  set familier(value: StuffViewModel) {
    this._familier = value
  }

  get bouclier(): StuffViewModel {
    return this._bouclier
  }

  set bouclier(value: StuffViewModel) {
    this._bouclier = value
  }

  get slot1(): StuffViewModel {
    return this._slot1
  }

  set slot1(value: StuffViewModel) {
    this._slot1 = value
  }

  get slot2(): StuffViewModel {
    return this._slot2
  }

  set slot2(value: StuffViewModel) {
    this._slot2 = value
  }

  get slot3(): StuffViewModel {
    return this._slot3
  }

  set slot3(value: StuffViewModel) {
    this._slot3 = value
  }

  get slot4(): StuffViewModel {
    return this._slot4
  }

  set slot4(value: StuffViewModel) {
    this._slot4 = value
  }

  get slot5(): StuffViewModel {
    return this._slot5
  }

  set slot5(value: StuffViewModel) {
    this._slot5 = value
  }

  get slot6(): StuffViewModel {
    return this._slot6
  }

  set slot6(value: StuffViewModel) {
    this._slot6 = value
  }

  private _listStuffEquipmentId = []

  get listStuffEquipmentId(): any[] {
    return this._listStuffEquipmentId
  }

  set listStuffEquipmentId(value: any[]) {
    if (value[0].type === 'Anneau' && this.listStuffEquipmentId.filter(value1 => value1.type === 'Anneau').length === 1) {
      this._listStuffEquipmentId.push(...value)
    } else if (value[0].type === 'Anneau' && this.listStuffEquipmentId.filter(value1 => value1.type === 'Anneau').length === 2) {
      const toto = this.listStuffEquipmentId.findIndex(value1 => value1.type === value[0].type)
      this._listStuffEquipmentId.splice(toto, 1)
      this._listStuffEquipmentId.push(...value)
    } else {
      const toto = this.listStuffEquipmentId.findIndex(value1 => value1.type === value[0].type)
      if (toto !== -1) {
        this._listStuffEquipmentId.splice(toto, 1)
      }
      this._listStuffEquipmentId.push(...value)
    }
  }

  set removeStuffFromListEquipmentId(idEquipement: number) {
    const toto = this.listStuffEquipmentId.findIndex(value1 => value1.id === idEquipement)
    this._listStuffEquipmentId.splice(toto, 1)
  }
}
