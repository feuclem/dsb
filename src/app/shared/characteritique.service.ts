import { Injectable } from '@angular/core';

@Injectable()
export class CharacteritiqueService {

  private _force = 0
  private _intelligence = 0
  private _chance = 0
  private _air = 0
  private _critique = 0


  get force(): number {
    return this._force
  }

  set force(value: number) {
    this._force += value
  }

  get intelligence(): number {
    return this._intelligence
  }

  set intelligence(value: number) {
    this._intelligence += value
  }

  get chance(): number {
    return this._chance
  }

  set chance(value: number) {
    this._chance += value
  }

  get air(): number {
    return this._air
  }

  set air(value: number) {
    this._air += value
  }

  get critique(): number {
    return this._critique
  }

  set critique(value: number) {
    this._critique += value
  }
}
