import {Component, OnInit} from '@angular/core'
import {ClasseService} from '../chooser/classe/classe.service'
import {StuffWatcherService} from './stuff.watcher.service'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: ['.customizedMarginTop { margin-top: 25px}'],
  styleUrls: ['custom.css']
})
export class BuilderComponent implements OnInit {

  classe: string
  isPanoplieBonusVisible: boolean = true

  constructor(
    private classeService: ClasseService,
    private stuffWatcherService: StuffWatcherService
  ) {}

  ngOnInit() {
    this.classeService._classe.subscribe(value => this.classe = value)
    this.stuffWatcherService._selectedStuffToWatch.subscribe(value => {
      if(value !== undefined && this.isPanoplieBonusVisible) {
        this.toggleCard()
      }
    })
  }
  toggleCard(){
    this.isPanoplieBonusVisible = !this.isPanoplieBonusVisible;
  }
}
