import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class ClasseService {

  private _classe = new Subject<string>()

  updateClasse(value: string): void {
    this._classe.next(value)
  }

  getClasse(): Observable<string> {
    return this._classe.asObservable()
  }

  constructor() {
  }

}
