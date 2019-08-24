import {Component, OnInit} from '@angular/core'
import {ClasseService} from '../chooser/classe/classe.service'
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {
  private classeSubscription: Subscription
  classe: string

  constructor(private classeService: ClasseService) {
  }

  ngOnInit() {
    this.classeSubscription = this.classeService.getClasse()
      .subscribe((val: string) => {
        this.classe = val
      })
  }
}
