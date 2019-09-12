import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {ClasseService} from '../chooser/classe/classe.service'

@Component({
  selector: 'dsb-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

  classe: string

  constructor(
    private router: Router,
    private classeService: ClasseService
  ) { }

  ngOnInit() {
    this.classeService._classe.subscribe(value => this.classe = value)
  }

  goToSpellPage() {
    if (this.classe === 'Iop') {
      this.router.navigate(['/iop'])
    }
    if (this.classe === 'Sacrieur') {
      this.router.navigate(['/sacrieur'])
    }
  }

}
