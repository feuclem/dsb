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
}
