import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {StuffService} from '../../shared/service/stuff.service'
import {StatistiquesService} from '../../shared/service/statistiques.service'
import {PanoplieService} from '../../shared/service/panoplie.service'
import {Equipement} from '../../shared/entities/Equipement'
import {StuffEquipementId} from '../../shared/entities/StuffEquipementId'
import {EquipementsHttpService} from '../../shared/httpService/equipements.http.service'
import {ANNEAU1, ANNEAU2} from '../../shared/service/localstorage/localstore.constants'

@Component({
  selector: 'dsb-equipements',
  templateUrl: './equipements.component.html',
  styles: [],
})
export class EquipementsComponent implements OnInit {
  isProgressBarVisible: Boolean = true
  numberPage: number
  numberPageList: number[]
  NUMBER_ITEM_PER_PAGE: number = 50 // TODO CLEM c'est le back qui doit gérer ça

  equipements: Equipement[]
  router: Router
  stuffService: StuffService
  statistiquesService: StatistiquesService
  panoplieService: PanoplieService
  equipementsHttpService: EquipementsHttpService

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    equipementsHttpService: EquipementsHttpService
  ) {
    this.router = router
    this.stuffService = stuffService
    this.statistiquesService = statistiquesService
    this.panoplieService = panoplieService
    this.equipementsHttpService = equipementsHttpService
  }

  ngOnInit() {
    this.equipementsHttpService.getTypeEquipements(1).then(response => {
      this.equipements = response
      this.isProgressBarVisible = false
    })
    this.equipementsHttpService.getTotalTypeEquipements().then(response => {
      this.numberPage = Math.round(response / this.NUMBER_ITEM_PER_PAGE)
      // @ts-ignore
      this.numberPageList = Array(this.numberPage).fill().map((value, index) => index + 1)
    })
  }

  setItem(equipement: Equipement) {
    this.stuffService.setItemStat(equipement)
    this.router.navigate(['/'])
  }

  setPanoplie(setId: number) {
    this.panoplieService.setPanoplieToStuff(setId)
    this.router.navigate(['/'])
  }

  getFullPanoplie(setId: number): Equipement[] {
    return this.panoplieService.getFullPanoplie(setId)
  }

  goToPage(page: number) {
    this.isProgressBarVisible = true
    this.equipementsHttpService.getTypeEquipements(page).then(response => {
      this.equipements = response
      this.isProgressBarVisible = false
    })
  }

  getStuffByName(event: any) {
    this.isProgressBarVisible = true
    this.equipementsHttpService.getStuffByName(event.target.value.toString()).then(response => {
      this.equipements = response
      this.isProgressBarVisible = false
    })
  }

}
