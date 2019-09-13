import {Injectable} from '@angular/core'

@Injectable()
export class StuffService {
  private _arme = ''

  get arme(): string {
    return this._arme
  }

  set arme(value: string) {
    this._arme = value
  }

  private _amulette = ''

  get amulette(): string {
    return this._amulette
  }

  set amulette(value: string) {
    this._amulette = value
  }

  private _anneau1 = ''

  get anneau1(): string {
    return this._anneau1
  }

  set anneau1(value: string) {
    this._anneau1 = value
  }

  private _anneau2 = ''

  get anneau2(): string {
    return this._anneau2
  }

  set anneau2(value: string) {
    this._anneau2 = value
  }

  private _bottes = ''

  get bottes(): string {
    return this._bottes
  }

  set bottes(value: string) {
    this._bottes = value
  }

  private _ceinture = ''

  get ceinture(): string {
    return this._ceinture
  }

  set ceinture(value: string) {
    this._ceinture = value
  }

  private _coiffe = ''

  get coiffe(): string {
    return this._coiffe
  }

  set coiffe(value: string) {
    this._coiffe = value
  }

  private _cape = ''

  get cape(): string {
    return this._cape
  }

  set cape(value: string) {
    this._cape = value
  }

  private _monture = ''

  get monture(): string {
    return this._monture
  }

  set monture(value: string) {
    this._monture = value
  }

  private _familier = ''

  get familier(): string {
    return this._familier
  }

  set familier(value: string) {
    this._familier = value
  }

  private _bouclier = ''

  get bouclier(): string {
    return this._bouclier
  }

  set bouclier(value: string) {
    this._bouclier = value
  }

  private _slot1 = ''

  get slot1(): string {
    return this._slot1
  }

  set slot1(value: string) {
    this._slot1 = value
  }

  private _slot2 = ''

  get slot2(): string {
    return this._slot2
  }

  set slot2(value: string) {
    this._slot2 = value
  }

  private _slot3 = ''

  get slot3(): string {
    return this._slot3
  }

  set slot3(value: string) {
    this._slot3 = value
  }

  private _slot4 = ''

  get slot4(): string {
    return this._slot4
  }

  set slot4(value: string) {
    this._slot4 = value
  }

  private _slot5 = ''

  get slot5(): string {
    return this._slot5
  }

  set slot5(value: string) {
    this._slot5 = value
  }

  private _slot6 = ''

  get slot6(): string {
    return this._slot6
  }

  set slot6(value: string) {
    this._slot6 = value
  }

  private _listIdEquipment = []

  get listIdEquipment(): number[] {
    return this._listIdEquipment
  }

  set listIdEquipment(value: number[]) {
    this._listIdEquipment.push(...value)
  }

  private _listIdEquipmentAlreadyCalculated = []

  set listIdEquipmentAlreadyCalculated(value: number[]) {
    this._listIdEquipmentAlreadyCalculated.push(...value)
  }

  get listIdEquipmentlistIdEquipmentAlreadyCalculated(): number[] {
    return this._listIdEquipmentAlreadyCalculated
  }

  resetListIdEquipment() {
    this._listIdEquipment = []
  }

  fillListIdEquipmentAlreadyCalculated() {
    this._listIdEquipmentAlreadyCalculated.push(...this.listIdEquipment)
  }
}
