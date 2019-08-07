import {Injectable} from '@angular/core'

@Injectable()
export class StuffService {
  private _arme = ''
  private _amulette = ''

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
}
