import {Statistique} from '../shared/entities/Statistique'

export class StuffViewModel {
  constructor(imgUrl: String, statistiques: Statistique[], idEquipement: number) {
    this._imgUrl = imgUrl
    this._statistiques = statistiques
    this._idEquipement = idEquipement
  }

  private _imgUrl: String = ''

  get imgUrl(): String {
    return this._imgUrl
  }

  set imgUrl(value: String) {
    this._imgUrl = value
  }

  private _statistiques: Statistique[]

  get statistiques(): Statistique[] {
    return this._statistiques
  }

  get sanitazedStatistiques(): any[] {
    return this._statistiques.map(value => {
      return {
        'label': value.label,
        'from': value.from,
        'to': value.to
      }
    })
  }

  set statistiques(value: Statistique[]) {
    this._statistiques = value
  }

  private _idEquipement: number

  get idEquipement(): number {
    return this._idEquipement
  }

  set idEquipement(value: number) {
    this._idEquipement = value
  }
}
