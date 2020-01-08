import {Injectable} from '@angular/core'
import {StuffViewModel} from '../../builder/StuffViewModel'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Observable} from 'rxjs/Observable'
import {StuffEquipementId} from '../entities/StuffEquipementId'

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
  private _familier = new BehaviorSubject<StuffViewModel>(undefined)
  private _bouclier = new BehaviorSubject<StuffViewModel>(undefined)
  private _slot1 = new BehaviorSubject<StuffViewModel>(undefined)
  private _slot2 = new BehaviorSubject<StuffViewModel>(undefined)
  private _slot3 = new BehaviorSubject<StuffViewModel>(undefined)
  private _slot4 = new BehaviorSubject<StuffViewModel>(undefined)
  private _slot5 = new BehaviorSubject<StuffViewModel>(undefined)
  private _slot6 = new BehaviorSubject<StuffViewModel>(undefined)

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

  updateFamilier(value: StuffViewModel): void {
    this._familier.next(value)
  }

  getFamilier(): Observable<StuffViewModel> {
    return this._familier.asObservable()
  }

  updateBouclier(value: StuffViewModel): void {
    this._bouclier.next(value)
  }

  getBouclier(): Observable<StuffViewModel> {
    return this._bouclier.asObservable()
  }

  updateSlot1(value: StuffViewModel): void {
    this._slot1.next(value)
  }

  getSlot1(): Observable<StuffViewModel> {
    return this._slot1.asObservable()
  }

  updateSlot2(value: StuffViewModel): void {
    this._slot2.next(value)
  }

  getSlot2(): Observable<StuffViewModel> {
    return this._slot2.asObservable()
  }

  updateSlot3(value: StuffViewModel): void {
    this._slot3.next(value)
  }

  getSlot3(): Observable<StuffViewModel> {
    return this._slot3.asObservable()
  }

  updateSlot4(value: StuffViewModel): void {
    this._slot4.next(value)
  }

  getSlot4(): Observable<StuffViewModel> {
    return this._slot4.asObservable()
  }

  updateSlot5(value: StuffViewModel): void {
    this._slot5.next(value)
  }

  getSlot5(): Observable<StuffViewModel> {
    return this._slot5.asObservable()
  }

  updateSlot6(value: StuffViewModel): void {
    this._slot6.next(value)
  }

  getSlot6(): Observable<StuffViewModel> {
    return this._slot6.asObservable()
  }

  private _listStuffEquipmentId = new BehaviorSubject<StuffEquipementId[]>([])

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
