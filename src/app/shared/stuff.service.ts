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
}
