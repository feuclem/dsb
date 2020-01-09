import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {StuffViewModel} from './StuffViewModel'

@Injectable()
export class StuffWatcherService {
  _selectedStuffToWatch = new BehaviorSubject<StuffViewModel>(undefined)

  updateSelectedStuffToWatch(value: StuffViewModel): void {
    this._selectedStuffToWatch.next(value)
  }

  resetSelectedStuffToWatchVitalite(): void {
    this._selectedStuffToWatch.next(undefined)
  }
}
