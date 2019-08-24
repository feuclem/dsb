import {Component, OnInit} from '@angular/core'
import {NiveauService} from './niveau.service'

@Component({
  selector: 'dsb-niveau',
  templateUrl: './niveau.component.html',
  styles: []
})
export class NiveauComponent implements OnInit {

  niveaus: number[] = []
  currentNiveau: number

  constructor(private niveauService: NiveauService) {
  }

  ngOnInit() {
    for (let i = 200; i >= 1; i--) {
      this.niveaus.push(i)
    }

    this.currentNiveau = 200
  }

  selectNiveau(niveau: number) {
    this.currentNiveau = niveau
    this.niveauService.updateNiveau(niveau)
  }

}
