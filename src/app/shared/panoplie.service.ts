import {Injectable} from '@angular/core'
import {Panoplie} from './entities/Panoplie'

@Injectable()
export class PanoplieService {

  private _listPanoplie = []

  get listPanoplie(): Panoplie[] {
    return this._listPanoplie
  }

  set listPanoplie(value: Panoplie[]) {
    this._listPanoplie = value
  }
}
