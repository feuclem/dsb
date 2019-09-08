import {Component, OnInit} from '@angular/core'
import {ClasseService} from './classe.service'

@Component({
  selector: 'dsb-classe',
  templateUrl: './classe.component.html',
  styles: []
})
export class ClasseComponent implements OnInit {

  classes: string[] = [
    'Iop',
    'Sacrieur'
  ]
  currentClasse = ''

  constructor(private classeService: ClasseService) {
  }

  ngOnInit() {
    this.currentClasse = this.classeService._classe.getValue()
  }

  selectClasse(classe: string) {
    this.currentClasse = classe
    this.classeService.updateClasse(classe)
  }

}
