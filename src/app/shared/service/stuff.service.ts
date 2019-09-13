import {Injectable} from '@angular/core'
import {StuffViewModel} from '../../builder/StuffViewModel'

@Injectable()
export class StuffService {
  private _arme: StuffViewModel
  private _amulette: StuffViewModel
  private _anneau1: StuffViewModel
  private _anneau2: StuffViewModel
  private _bottes: StuffViewModel
  private _ceinture: StuffViewModel
  private _coiffe: StuffViewModel
  private _cape: StuffViewModel
  private _monture: StuffViewModel
  private _familier: StuffViewModel
  private _bouclier: StuffViewModel
  private _slot1: StuffViewModel
  private _slot2: StuffViewModel
  private _slot3: StuffViewModel
  private _slot4: StuffViewModel
  private _slot5: StuffViewModel
  private _slot6: StuffViewModel


  get arme(): StuffViewModel {
    return this._arme
  }

  set arme(value: StuffViewModel) {
    this._arme = value
  }

  get amulette(): StuffViewModel {
    return this._amulette
  }

  set amulette(value: StuffViewModel) {
    this._amulette = value
  }

  get anneau1(): StuffViewModel {
    return this._anneau1
  }

  set anneau1(value: StuffViewModel) {
    this._anneau1 = value
  }

  get anneau2(): StuffViewModel {
    return this._anneau2
  }

  set anneau2(value: StuffViewModel) {
    this._anneau2 = value
  }

  get bottes(): StuffViewModel {
    return this._bottes
  }

  set bottes(value: StuffViewModel) {
    this._bottes = value
  }

  get ceinture(): StuffViewModel {
    return this._ceinture
  }

  set ceinture(value: StuffViewModel) {
    this._ceinture = value
  }

  get coiffe(): StuffViewModel {
    return this._coiffe
  }

  set coiffe(value: StuffViewModel) {
    this._coiffe = value
  }

  get cape(): StuffViewModel {
    return this._cape
  }

  set cape(value: StuffViewModel) {
    this._cape = value
  }

  get monture(): StuffViewModel {
    return this._monture
  }

  set monture(value: StuffViewModel) {
    this._monture = value
  }

  get familier(): StuffViewModel {
    return this._familier
  }

  set familier(value: StuffViewModel) {
    this._familier = value
  }

  get bouclier(): StuffViewModel {
    return this._bouclier
  }

  set bouclier(value: StuffViewModel) {
    this._bouclier = value
  }

  get slot1(): StuffViewModel {
    return this._slot1
  }

  set slot1(value: StuffViewModel) {
    this._slot1 = value
  }

  get slot2(): StuffViewModel {
    return this._slot2
  }

  set slot2(value: StuffViewModel) {
    this._slot2 = value
  }

  get slot3(): StuffViewModel {
    return this._slot3
  }

  set slot3(value: StuffViewModel) {
    this._slot3 = value
  }

  get slot4(): StuffViewModel {
    return this._slot4
  }

  set slot4(value: StuffViewModel) {
    this._slot4 = value
  }

  get slot5(): StuffViewModel {
    return this._slot5
  }

  set slot5(value: StuffViewModel) {
    this._slot5 = value
  }

  get slot6(): StuffViewModel {
    return this._slot6
  }

  set slot6(value: StuffViewModel) {
    this._slot6 = value
  }

  private _listStuffEquipmentId = []

  get listStuffEquipmentId(): any[] {
    return this._listStuffEquipmentId
  }

  set listStuffEquipmentId(value: any[]) {
    if (value[0].type === 'Anneau' && this.listStuffEquipmentId.filter(value1 => value1.type === 'Anneau').length === 1) {
      this._listStuffEquipmentId.push(...value)
    } else if (value[0].type === 'Anneau' && this.listStuffEquipmentId.filter(value1 => value1.type === 'Anneau').length === 2) {
      const toto = this.listStuffEquipmentId.findIndex(value1 => value1.type === value[0].type)
      this._listStuffEquipmentId.splice(toto, 1)
      this._listStuffEquipmentId.push(...value)
    } else {
      const toto = this.listStuffEquipmentId.findIndex(value1 => value1.type === value[0].type)
      if (toto !== -1) {
        this._listStuffEquipmentId.splice(toto, 1)
      }
      this._listStuffEquipmentId.push(...value)
    }
  }

  set removeStuffFromListEquipmentId(idEquipement: number) {
    const toto = this.listStuffEquipmentId.findIndex(value1 => value1.id === idEquipement)
    this._listStuffEquipmentId.splice(toto, 1)
  }
}
