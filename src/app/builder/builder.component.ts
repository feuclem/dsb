import {Component, OnInit} from '@angular/core'
import {ClasseService} from '../chooser/classe/classe.service'
import {StuffWatcherService} from './stuff.watcher.service'
import {StuffService} from '../shared/service/stuff.service'
import {FirebaseHttpService} from '../shared/httpService/firebase.http.service'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: ['.customizedMarginTop { margin-top: 25px}'],
  styleUrls: ['custom.css']
})
export class BuilderComponent implements OnInit {

  classe: string
  isPanoplieBonusVisible: Boolean = true

  constructor(
    private classeService: ClasseService,
    private stuffWatcherService: StuffWatcherService,
    private stuffService: StuffService,
    private firebaseHttpService: FirebaseHttpService
  ) {
  }

  ngOnInit() {
    this.classeService._classe.subscribe(value => this.classe = value)
    this.stuffWatcherService._selectedStuffToWatch.subscribe(value => {
      if (value !== undefined && this.isPanoplieBonusVisible) {
        this.toggleCard()
      }
    })
  }

  toggleCard() {
    this.isPanoplieBonusVisible = !this.isPanoplieBonusVisible
  }

  // saveStuff() {
  //   const dataToSave = {
  //     'amulette': {
  //       imgUrl: this.stuffService._amulette.value ? this.stuffService._amulette.value.imgUrl : '',
  //       statistiques: this.stuffService._amulette.value ? this.stuffService._amulette.value.sanitazedStatistiques : []
  //     },
  //     'anneau1': {
  //       imgUrl: this.stuffService._anneau1.value ? this.stuffService._anneau1.value.imgUrl : '',
  //       statistiques: this.stuffService._anneau1.value ? this.stuffService._anneau1.value.sanitazedStatistiques : []
  //     },
  //     'anneau2': {
  //       imgUrl: this.stuffService._anneau2.value ? this.stuffService._anneau2.value.imgUrl : '',
  //       statistiques: this.stuffService._anneau2.value ? this.stuffService._anneau2.value.sanitazedStatistiques : []
  //     },
  //     'ceinture': {
  //       imgUrl: this.stuffService._ceinture.value ? this.stuffService._ceinture.value.imgUrl : '',
  //       statistiques: this.stuffService._ceinture.value ? this.stuffService._ceinture.value.sanitazedStatistiques : []
  //     },
  //     'cape': {
  //       imgUrl: this.stuffService._cape.value ? this.stuffService._cape.value.imgUrl : '',
  //       statistiques: this.stuffService._cape.value ? this.stuffService._cape.value.sanitazedStatistiques : []
  //     },
  //     'coiffe': {
  //       imgUrl: this.stuffService._coiffe.value ? this.stuffService._coiffe.value.imgUrl : '',
  //       statistiques: this.stuffService._coiffe.value ? this.stuffService._coiffe.value.sanitazedStatistiques : []
  //     },
  //     'bottes': {
  //       imgUrl: this.stuffService._bottes.value ? this.stuffService._bottes.value.imgUrl : '',
  //       statistiques: this.stuffService._bottes.value ? this.stuffService._bottes.value.sanitazedStatistiques : []
  //     },
  //     'familier': {
  //       imgUrl: this.stuffService._familier.value ? this.stuffService._familier.value.imgUrl : '',
  //       statistiques: this.stuffService._familier.value ? this.stuffService._familier.value.sanitazedStatistiques : []
  //     },
  //     'monture': {
  //       imgUrl: this.stuffService._monture.value ? this.stuffService._monture.value.imgUrl : '',
  //       statistiques: this.stuffService._monture.value ? this.stuffService._monture.value.sanitazedStatistiques : []
  //     },
  //     'bouclier': {
  //       imgUrl: this.stuffService._bouclier.value ? this.stuffService._bouclier.value.imgUrl : '',
  //       statistiques: this.stuffService._bouclier.value ? this.stuffService._bouclier.value.sanitazedStatistiques : []
  //     },
  //     'listStuffId': this.stuffService._listStuffEquipmentId.value ? this.stuffService._listStuffEquipmentId.value.map(value => value.id) : []
  //   }
  //
  //   this.firebaseHttpService.firestore.collection('stuff').add(dataToSave).then(r => console.log(r))
  // }
}
