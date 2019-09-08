import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class CharacteristiqueService {
  private _dommagesNeutreArme = 0

  get dommagesNeutreArme(): number {
    return this._dommagesNeutreArme
  }

  set dommagesNeutreArme(value: number) {
    this._dommagesNeutreArme = value
  }

  private _dommagesNeutre = 0

  get dommagesNeutre(): number {
    return this._dommagesNeutre
  }

  set dommagesNeutre(value: number) {
    this._dommagesNeutre = value
  }

  private _force = 0

  get force(): number {
    return this._force
  }

  set force(value: number) {
    this._force = value
  }

  private _intelligence = 0

  get intelligence(): number {
    return this._intelligence
  }

  set intelligence(value: number) {
    this._intelligence = value
  }

  private _chance = 0

  get chance(): number {
    return this._chance
  }

  set chance(value: number) {
    this._chance = value
  }

  private _agilite = 0

  get agilite(): number {
    return this._agilite
  }

  set agilite(value: number) {
    this._agilite = value
  }

  private _sagesse = 0

  get sagesse(): number {
    return this._sagesse
  }

  set sagesse(value: number) {
    this._sagesse = value
  }

  private _dommages = 0

  get dommages(): number {
    return this._dommages
  }

  set dommages(value: number) {
    this._dommages = value
  }

  private _puissance = 0

  get puissance(): number {
    return this._puissance
  }

  set puissance(value: number) {
    this._puissance = value
  }

  private _dommagesTerre = 0

  get dommagesTerre(): number {
    return this._dommagesTerre
  }

  set dommagesTerre(value: number) {
    this._dommagesTerre = value
  }

  private _dommagesTerreArme = 0

  get dommagesTerreArme(): number {
    return this._dommagesTerreArme
  }

  set dommagesTerreArme(value: number) {
    this._dommagesTerreArme = value
  }

  private _dommagesFeu = 0

  get dommagesFeu(): number {
    return this._dommagesFeu
  }

  set dommagesFeu(value: number) {
    this._dommagesFeu = value
  }

  private _dommagesFeuArme = 0

  get dommagesFeuArme(): number {
    return this._dommagesFeuArme
  }

  set dommagesFeuArme(value: number) {
    this._dommagesFeuArme = value
  }

  private _dommagesEau = 0

  get dommagesEau(): number {
    return this._dommagesEau
  }

  set dommagesEau(value: number) {
    this._dommagesEau = value
  }

  private _dommagesEauArme = 0

  get dommagesEauArme(): number {
    return this._dommagesEauArme
  }

  set dommagesEauArme(value: number) {
    this._dommagesEauArme = value
  }

  private _dommagesAir = 0

  get dommagesAir(): number {
    return this._dommagesAir
  }

  set dommagesAir(value: number) {
    this._dommagesAir = value
  }

  private _dommagesAirArme = 0

  get dommagesAirArme(): number {
    return this._dommagesAirArme
  }

  set dommagesAirArme(value: number) {
    this._dommagesAirArme = value
  }

  private _fuite = 0

  get fuite(): number {
    return this._fuite
  }

  set fuite(value: number) {
    this._fuite = value
  }

  private _tacle = 0

  get tacle(): number {
    return this._tacle
  }

  set tacle(value: number) {
    this._tacle = value
  }

  private _po = 0

  get po(): number {
    return this._po
  }

  set po(value: number) {
    this._po = value
  }

  private _pa = 0

  get pa(): number {
    return this._pa
  }

  set pa(value: number) {
    this._pa = value
  }

  private _pm = 0

  get pm(): number {
    return this._pm
  }

  set pm(value: number) {
    this._pm = value
  }

  private _retraitPA = 0

  get retraitPA(): number {
    return this._retraitPA
  }

  set retraitPA(value: number) {
    this._retraitPA = value
  }

  private _retraitPM = 0

  get retraitPM(): number {
    return this._retraitPM
  }

  set retraitPM(value: number) {
    this._retraitPM = value
  }

  private _esquivePA = 0

  get esquivePA(): number {
    return this._esquivePA
  }

  set esquivePA(value: number) {
    this._esquivePA = value
  }

  private _esquivePM = 0

  get esquivePM(): number {
    return this._esquivePM
  }

  set esquivePM(value: number) {
    this._esquivePM = value
  }

  private _resistanceFixeNeutre = 0

  get resistanceFixeNeutre(): number {
    return this._resistanceFixeNeutre
  }

  set resistanceFixeNeutre(value: number) {
    this._resistanceFixeNeutre = value
  }

  private _resistanceFixeTerre = 0

  get resistanceFixeTerre(): number {
    return this._resistanceFixeTerre
  }

  set resistanceFixeTerre(value: number) {
    this._resistanceFixeTerre = value
  }

  private _resistanceFixeFeu = 0

  get resistanceFixeFeu(): number {
    return this._resistanceFixeFeu
  }

  set resistanceFixeFeu(value: number) {
    this._resistanceFixeFeu = value
  }

  private _resistanceFixeEau = 0

  get resistanceFixeEau(): number {
    return this._resistanceFixeEau
  }

  set resistanceFixeEau(value: number) {
    this._resistanceFixeEau = value
  }

  private _resistanceFixeAir = 0

  get resistanceFixeAir(): number {
    return this._resistanceFixeAir
  }

  set resistanceFixeAir(value: number) {
    this._resistanceFixeAir = value
  }

  private _resistanceCritiques = 0

  get resistanceCritiques(): number {
    return this._resistanceCritiques
  }

  set resistanceCritiques(value: number) {
    this._resistanceCritiques = value
  }

  private _resistancePoussees = 0

  get resistancePoussees(): number {
    return this._resistancePoussees
  }

  set resistancePoussees(value: number) {
    this._resistancePoussees = value
  }

  private _soins = 0

  get soins(): number {
    return this._soins
  }

  set soins(value: number) {
    this._soins = value
  }

  private _pods = 0

  get pods(): number {
    return this._pods
  }

  set pods(value: number) {
    this._pods = value
  }

  private _dommagesCritiques = 0

  get dommagesCritiques(): number {
    return this._dommagesCritiques
  }

  set dommagesCritiques(value: number) {
    this._dommagesCritiques = value
  }

  private _dommagesPoussee = 0

  get dommagesPoussee(): number {
    return this._dommagesPoussee
  }

  set dommagesPoussee(value: number) {
    this._dommagesPoussee = value
  }

  private _dommagesMelee = 0

  get dommagesMelee(): number {
    return this._dommagesMelee
  }

  set dommagesMelee(value: number) {
    this._dommagesMelee = value
  }

  private _dommagesDistance = 0

  get dommagesDistance(): number {
    return this._dommagesDistance
  }

  set dommagesDistance(value: number) {
    this._dommagesDistance = value
  }

  private _puissancePiege = 0

  get puissancePiege(): number {
    return this._puissancePiege
  }

  set puissancePiege(value: number) {
    this._puissancePiege = value
  }

  private _dommagesPiege = 0

  get dommagesPiege(): number {
    return this._dommagesPiege
  }

  set dommagesPiege(value: number) {
    this._dommagesPiege = value
  }

  private _dommagesAuxSorts = 0

  get dommagesAuxSorts(): number {
    return this._dommagesAuxSorts
  }

  set dommagesAuxSorts(value: number) {
    this._dommagesAuxSorts = value
  }

  private _prospection = 0

  get prospection(): number {
    return this._prospection
  }

  set prospection(value: number) {
    this._prospection = value
  }

  private _invocations = 0

  get invocations(): number {
    return this._invocations
  }

  set invocations(value: number) {
    this._invocations = value
  }

  private _initiative = 0

  get initiative(): number {
    return this._initiative
  }

  set initiative(value: number) {
    this._initiative = value
  }

  private _resistanceNeutre = 0

  get resistanceNeutre(): number {
    return this._resistanceNeutre
  }

  set resistanceNeutre(value: number) {
    this._resistanceNeutre = value
  }

  private _resistanceTerre = 0

  get resistanceTerre(): number {
    return this._resistanceTerre
  }

  set resistanceTerre(value: number) {
    this._resistanceTerre = value
  }

  private _resistanceFeu = 0

  get resistanceFeu(): number {
    return this._resistanceFeu
  }

  set resistanceFeu(value: number) {
    this._resistanceFeu = value
  }

  private _resistanceEau = 0

  get resistanceEau(): number {
    return this._resistanceEau
  }

  set resistanceEau(value: number) {
    this._resistanceEau = value
  }

  private _resistanceAir = 0

  get resistanceAir(): number {
    return this._resistanceAir
  }

  set resistanceAir(value: number) {
    this._resistanceAir = value
  }

  private _resistanceDistance = 0

  get resistanceDistance(): number {
    return this._resistanceDistance
  }

  set resistanceDistance(value: number) {
    this._resistanceDistance = value
  }

  private _resistanceMelee = 0

  get resistanceMelee(): number {
    return this._resistanceMelee
  }

  set resistanceMelee(value: number) {
    this._resistanceMelee = value
  }

  private _critique = 0

  get critique(): number {
    return this._critique
  }

  set critique(value: number) {
    this._critique = value
  }

  _vitalite = new BehaviorSubject<number>(100)

  updateVitalite(value: number): void {
    this._vitalite.next(value)
  }
}
