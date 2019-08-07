import {Injectable} from '@angular/core'

@Injectable()
export class StuffService {
  private _arme = ''
  private _amulette = ''
  private _anneau1 = ''
  private _anneau2 = ''
  private _bottes = ''
  private _ceinture = ''
  private _coiffe = ''
  private _cape = ''
  private _monture = ''
  private _familier = ''
  private _bouclier = ''
  private _slot1 = ''
  private _slot2 = ''
  private _slot3 = ''
  private _slot4 = ''
  private _slot5 = ''
  private _slot6 = ''

  get arme(): string {
    return this._arme
  }

  set arme(value: string) {
    this._arme = value
  }

  get amulette(): string {
    return this._amulette
  }

  set amulette(value: string) {
    this._amulette = value
  }

  get anneau1(): string {
    return this._anneau1
  }

  set anneau1(value: string) {
    this._anneau1 = value
  }

  get anneau2(): string {
    return this._anneau2
  }

  set anneau2(value: string) {
    this._anneau2 = value
  }

  get bottes(): string {
    return this._bottes
  }

  set bottes(value: string) {
    this._bottes = value
  }

  get ceinture(): string {
    return this._ceinture
  }

  set ceinture(value: string) {
    this._ceinture = value
  }

  get coiffe(): string {
    return this._coiffe
  }

  set coiffe(value: string) {
    this._coiffe = value
  }

  get cape(): string {
    return this._cape
  }

  set cape(value: string) {
    this._cape = value
  }

  get monture(): string {
    return this._monture
  }

  set monture(value: string) {
    this._monture = value
  }

  get familier(): string {
    return this._familier
  }

  set familier(value: string) {
    this._familier = value
  }

  get bouclier(): string {
    return this._bouclier
  }

  set bouclier(value: string) {
    this._bouclier = value
  }

  get slot1(): string {
    return this._slot1
  }

  set slot1(value: string) {
    this._slot1 = value
  }

  get slot2(): string {
    return this._slot2
  }

  set slot2(value: string) {
    this._slot2 = value
  }

  get slot3(): string {
    return this._slot3
  }

  set slot3(value: string) {
    this._slot3 = value
  }

  get slot4(): string {
    return this._slot4
  }

  set slot4(value: string) {
    this._slot4 = value
  }

  get slot5(): string {
    return this._slot5
  }

  set slot5(value: string) {
    this._slot5 = value
  }

  get slot6(): string {
    return this._slot6
  }

  set slot6(value: string) {
    this._slot6 = value
  }
}
