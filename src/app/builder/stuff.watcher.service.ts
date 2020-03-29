import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Equipement} from '../shared/entities/Equipement'

@Injectable()
export class StuffWatcherService {
  _selectedStuffToWatch = new BehaviorSubject<Equipement>(undefined)

  updateSelectedStuffToWatch(value: Equipement): void {
    this._selectedStuffToWatch.next(value)
  }
}
