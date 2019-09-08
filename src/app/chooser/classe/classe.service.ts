import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class ClasseService {

  _classe = new BehaviorSubject<string>('')

  updateClasse(value: string): void {
    this._classe.next(value)
  }
}
