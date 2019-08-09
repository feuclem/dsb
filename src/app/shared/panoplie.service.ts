import {Injectable} from '@angular/core'

@Injectable()
export class PanoplieService {

  private _listPanoplie = []

  get listPanoplie(): any[] {
    return this._listPanoplie
  }

  set listPanoplie(value: any[]) {
    this._listPanoplie = value
  }
}
