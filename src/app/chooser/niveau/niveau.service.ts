import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class NiveauService {

  private _niveau = new BehaviorSubject<number>(200)

  updateNiveau(value: number): void {
    this._niveau.next(value)
  }

  getNiveau(): Observable<number> {
    return this._niveau.asObservable()
  }
}
