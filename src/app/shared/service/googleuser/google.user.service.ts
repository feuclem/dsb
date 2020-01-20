import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class GoogleUserService {

  _isUserSignedIn = new BehaviorSubject<boolean>(false)

  constructor() {}

  updateUserSignedIn(value: boolean): void {
    this._isUserSignedIn.next(value)
  }

  getUserSignedIn(): Observable<boolean> {
    return this._isUserSignedIn.asObservable()
  }

}
