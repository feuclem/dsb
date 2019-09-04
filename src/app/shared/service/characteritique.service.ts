import {Injectable} from '@angular/core'

@Injectable()
export class CharacteritiqueService {
  private _force = 0
  private _intelligence = 0
  private _chance = 0
  private _agilite = 0
  private _critique = 0
  private _vitalite = 0
  private _puissance = 0

  private _dommages = 0
  private _dommagesTerre = 0
  private _dommagesFeu = 0
  private _dommagesEau = 0
  private _dommagesAir = 0
  private _dommagesCritique = 0
  private _dommagesPousee = 0

  private _dommagesMelee = 0
  private _dommagesDistance = 0
  private _dommagesAuxSorts = 0

  private _resistanceTerre = 0
  private _resistanceFeu = 0
  private _resistanceEau = 0
  private _resistanceAir = 0

  private _resistanceFixeTerre = 0
  private _resistanceFixeFeu = 0
  private _resistanceFixeEau = 0
  private _resistanceFixeAir = 0

  private _resistanceDistance = 0
  private _resistanceMelee = 0

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

  get agilite(): number {
    return this._agilite
  }

  set agilite(value: number) {
    this._agilite += value
  }

  get critique(): number {
    return this._critique
  }

  set critique(value: number) {
    this._critique += value
  }

  get vitalite(): number {
    return this._vitalite
  }

  set vitalite(value: number) {
    this._vitalite += value
  }

  get puissance(): number {
    return this._puissance
  }

  set puissance(value: number) {
    this._puissance += value
  }

  get dommages(): number {
    return this._dommages
  }

  set dommages(value: number) {
    this._dommages += value
  }

  get dommagesTerre(): number {
    return this._dommagesTerre
  }

  set dommagesTerre(value: number) {
    this._dommagesTerre += value
  }

  get dommagesFeu(): number {
    return this._dommagesFeu
  }

  set dommagesFeu(value: number) {
    this._dommagesFeu += value
  }

  get dommagesEau(): number {
    return this._dommagesEau
  }

  set dommagesEau(value: number) {
    this._dommagesEau += value
  }

  get dommagesAir(): number {
    return this._dommagesAir
  }

  set dommagesAir(value: number) {
    this._dommagesAir += value
  }

  get dommagesCritique(): number {
    return this._dommagesCritique
  }

  set dommagesCritique(value: number) {
    this._dommagesCritique += value
  }

  get dommagesMelee(): number {
    return this._dommagesMelee
  }

  set dommagesMelee(value: number) {
    this._dommagesMelee += value
  }

  get dommagesDistance(): number {
    return this._dommagesDistance
  }

  set dommagesDistance(value: number) {
    this._dommagesDistance += value
  }

  get dommagesAuxSorts(): number {
    return this._dommagesAuxSorts
  }

  set dommagesAuxSorts(value: number) {
    this._dommagesAuxSorts += value
  }

  get resistanceTerre(): number {
    return this._resistanceTerre
  }

  set resistanceTerre(value: number) {
    this._resistanceTerre = value
  }

  get resistanceFeu(): number {
    return this._resistanceFeu
  }

  set resistanceFeu(value: number) {
    this._resistanceFeu = value
  }

  get resistanceEau(): number {
    return this._resistanceEau
  }

  set resistanceEau(value: number) {
    this._resistanceEau = value
  }

  get resistanceAir(): number {
    return this._resistanceAir
  }

  set resistanceAir(value: number) {
    this._resistanceAir = value
  }

  get resistanceFixeTerre(): number {
    return this._resistanceFixeTerre
  }

  set resistanceFixeTerre(value: number) {
    this._resistanceFixeTerre = value
  }

  get resistanceFixeFeu(): number {
    return this._resistanceFixeFeu
  }

  set resistanceFixeFeu(value: number) {
    this._resistanceFixeFeu = value
  }

  get resistanceFixeEau(): number {
    return this._resistanceFixeEau
  }

  set resistanceFixeEau(value: number) {
    this._resistanceFixeEau = value
  }

  get resistanceFixeAir(): number {
    return this._resistanceFixeAir
  }

  set resistanceFixeAir(value: number) {
    this._resistanceFixeAir = value
  }

  get dommagesPousee(): number {
    return this._dommagesPousee
  }

  set dommagesPousee(value: number) {
    this._dommagesPousee = value
  }

  get resistanceDistance(): number {
    return this._resistanceDistance
  }

  set resistanceDistance(value: number) {
    this._resistanceDistance = value
  }

  get resistanceMelee(): number {
    return this._resistanceMelee
  }

  set resistanceMelee(value: number) {
    this._resistanceMelee = value
  }
}
