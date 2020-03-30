import {Component, OnInit} from '@angular/core'
import {StuffWatcherService} from '../stuff.watcher.service'
import {Statistique} from '../../shared/entities/Statistique'

@Component({
  selector: 'dsb-stuff-viewer',
  templateUrl: './stuff-viewer.component.html',
  styles: []
})
export class StuffViewerComponent implements OnInit {

  name: String
  imgUrl: String
  stats: Statistique[]

  constructor(
    private stuffWatcherService: StuffWatcherService
  ) { }

  ngOnInit() {
    this.stuffWatcherService._selectedStuffToWatch.subscribe(value => {
      if (value !== undefined) {
        this.name = 'TODO'
        this.imgUrl = value.imgUrl
        this.stats = value.stats
      }
    })
  }

}
