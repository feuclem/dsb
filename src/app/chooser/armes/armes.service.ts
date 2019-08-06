import {Injectable} from '@angular/core'
import {Arme} from '../../../domain/Arme'
import {DommagesNeutre, DommagesTerre, Force, Statistique} from '../../../domain/Statistique'

@Injectable()
export class ArmesService {

  constructor() {
  }

  getAllArmes(): Promise<any> {
    const armes: Arme[] = []
    return fetch('https://dofapi2.herokuapp.com/weapons?filter[offset]=0&filter[limit]=1&filter[skip]=0')
      .then(r => r.json())
      .then(json => {
        json.map(item => armes.push(
          new Arme(
            item._id,
            item.name,
            parseInt(item.lvl),
            item.type,
            item.imgUrl,
            item.url,
            item.stats.map(stat => {
              if (stat['(dommages Neutre)'] && stat['(dommages Neutre)']['from']) {
                return new DommagesNeutre(
                  parseInt(stat['(dommages Neutre)']['from']),
                  parseInt(stat['(dommages Neutre)']['to'] ? stat['(dommages Neutre)']['to'] : stat['(dommages Neutre)']['from'])
                )
              }
              if (stat['Force'] && stat['Force']['from']) {
                return new Force(
                  parseInt(stat['Force']['from']),
                  parseInt(stat['Force']['to'] ? stat['Force']['to'] : stat['Force']['from'])
                )
              }
              if (stat['Dommages Terre'] && stat['Dommages Terre']['from']) {
                return new DommagesTerre(
                  parseInt(stat['Dommages Terre']['from']),
                  parseInt(stat['Dommages Terre']['to'] ? stat['Dommages Terre']['to'] : stat['Dommages Terre']['from'])
                )
              }
            })
          )
        ))
        return armes
      })
  }
}
