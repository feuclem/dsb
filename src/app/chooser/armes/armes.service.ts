import { Injectable } from '@angular/core'
import * as data from '../../../json/armes_test'

@Injectable()
export class ArmesService {

  constructor() { }

  getAllArmes() {
    const obj = JSON.parse(data)
    console.log(obj)
  }
}
