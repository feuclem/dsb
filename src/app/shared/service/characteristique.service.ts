import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class CharacteristiqueService {
  private _dommagesNeutreArme = 0
  private _dommagesNeutre = 0
  private _sagesse = 0
  private _dommages = 0
  private _puissance = 0
  private _dommagesTerre = 0
  private _dommagesTerreArme = 0
  private _dommagesFeu = 0
  private _dommagesFeuArme = 0
  private _dommagesEau = 0
  private _dommagesEauArme = 0
  private _dommagesAir = 0
  private _dommagesAirArme = 0
  private _fuite = 0
  private _tacle = 0
  private _po = 1
  private _pa = 7
  private _pm = 3
  private _retraitPA = 0
  private _retraitPM = 0
  private _esquivePA = 0
  private _esquivePM = 0
  private _resistanceFixeNeutre = 0
  private _resistanceFixeTerre = 0
  private _resistanceFixeFeu = 0
  private _resistanceFixeEau = 0
  private _resistanceFixeAir = 0
  private _resistanceCritiques = 0
  private _resistancePoussees = 0
  private _soins = 0
  private _pods = 0
  private _dommagesCritiques = 0
  private _dommagesPoussee = 0
  private _dommagesMelee = 0
  private _dommagesDistance = 0
  private _puissancePiege = 0
  private _dommagesPiege = 0
  private _dommagesAuxSorts = 0
  private _prospection = 0
  private _invocations = 1
  private _initiative = 0
  private _resistanceNeutre = 0
  private _resistanceTerre = 0
  private _resistanceFeu = 0
  private _resistanceEau = 0
  private _resistanceAir = 0
  private _resistanceDistance = 0
  private _resistanceMelee = 0
  private _critique = 0

  get dommagesNeutreArme(): number {
    return this._dommagesNeutreArme
  }

  set dommagesNeutreArme(value: number) {
    this._dommagesNeutreArme = value
  }

  get dommagesNeutre(): number {
    return this._dommagesNeutre
  }

  set dommagesNeutre(value: number) {
    this._dommagesNeutre = value
  }

  get sagesse(): number {
    return this._sagesse
  }

  set sagesse(value: number) {
    this._sagesse = value
  }

  get dommages(): number {
    return this._dommages
  }

  set dommages(value: number) {
    this._dommages = value
  }

  get puissance(): number {
    return this._puissance
  }

  set puissance(value: number) {
    this._puissance = value
  }

  get dommagesTerre(): number {
    return this._dommagesTerre
  }

  set dommagesTerre(value: number) {
    this._dommagesTerre = value
  }

  get dommagesTerreArme(): number {
    return this._dommagesTerreArme
  }

  set dommagesTerreArme(value: number) {
    this._dommagesTerreArme = value
  }

  get dommagesFeu(): number {
    return this._dommagesFeu
  }

  set dommagesFeu(value: number) {
    this._dommagesFeu = value
  }

  get dommagesFeuArme(): number {
    return this._dommagesFeuArme
  }

  set dommagesFeuArme(value: number) {
    this._dommagesFeuArme = value
  }

  get dommagesEau(): number {
    return this._dommagesEau
  }

  set dommagesEau(value: number) {
    this._dommagesEau = value
  }

  get dommagesEauArme(): number {
    return this._dommagesEauArme
  }

  set dommagesEauArme(value: number) {
    this._dommagesEauArme = value
  }

  get dommagesAir(): number {
    return this._dommagesAir
  }

  set dommagesAir(value: number) {
    this._dommagesAir = value
  }

  get dommagesAirArme(): number {
    return this._dommagesAirArme
  }

  set dommagesAirArme(value: number) {
    this._dommagesAirArme = value
  }

  get fuite(): number {
    return this._fuite
  }

  set fuite(value: number) {
    this._fuite = value
  }

  get tacle(): number {
    return this._tacle
  }

  set tacle(value: number) {
    this._tacle = value
  }

  get po(): number {
    return this._po
  }

  set po(value: number) {
    this._po = value
  }

  get pa(): number {
    return this._pa
  }

  set pa(value: number) {
    this._pa = value
  }

  get pm(): number {
    return this._pm
  }

  set pm(value: number) {
    this._pm = value
  }

  get retraitPA(): number {
    return this._retraitPA
  }

  set retraitPA(value: number) {
    this._retraitPA = value
  }

  get retraitPM(): number {
    return this._retraitPM
  }

  set retraitPM(value: number) {
    this._retraitPM = value
  }

  get esquivePA(): number {
    return this._esquivePA
  }

  set esquivePA(value: number) {
    this._esquivePA = value
  }

  get esquivePM(): number {
    return this._esquivePM
  }

  set esquivePM(value: number) {
    this._esquivePM = value
  }

  get resistanceFixeNeutre(): number {
    return this._resistanceFixeNeutre
  }

  set resistanceFixeNeutre(value: number) {
    this._resistanceFixeNeutre = value
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

  get resistanceCritiques(): number {
    return this._resistanceCritiques
  }

  set resistanceCritiques(value: number) {
    this._resistanceCritiques = value
  }

  get resistancePoussees(): number {
    return this._resistancePoussees
  }

  set resistancePoussees(value: number) {
    this._resistancePoussees = value
  }

  get soins(): number {
    return this._soins
  }

  set soins(value: number) {
    this._soins = value
  }

  get pods(): number {
    return this._pods
  }

  set pods(value: number) {
    this._pods = value
  }

  get dommagesCritiques(): number {
    return this._dommagesCritiques
  }

  set dommagesCritiques(value: number) {
    this._dommagesCritiques = value
  }

  get dommagesPoussee(): number {
    return this._dommagesPoussee
  }

  set dommagesPoussee(value: number) {
    this._dommagesPoussee = value
  }

  get dommagesMelee(): number {
    return this._dommagesMelee
  }

  set dommagesMelee(value: number) {
    this._dommagesMelee = value
  }

  get dommagesDistance(): number {
    return this._dommagesDistance
  }

  set dommagesDistance(value: number) {
    this._dommagesDistance = value
  }

  get puissancePiege(): number {
    return this._puissancePiege
  }

  set puissancePiege(value: number) {
    this._puissancePiege = value
  }

  get dommagesPiege(): number {
    return this._dommagesPiege
  }

  set dommagesPiege(value: number) {
    this._dommagesPiege = value
  }

  get dommagesAuxSorts(): number {
    return this._dommagesAuxSorts
  }

  set dommagesAuxSorts(value: number) {
    this._dommagesAuxSorts = value
  }

  get prospection(): number {
    return this._prospection
  }

  set prospection(value: number) {
    this._prospection = value
  }

  get invocations(): number {
    return this._invocations
  }

  set invocations(value: number) {
    this._invocations = value
  }

  get initiative(): number {
    return this._initiative
  }

  set initiative(value: number) {
    this._initiative = value
  }

  get resistanceNeutre(): number {
    return this._resistanceNeutre
  }

  set resistanceNeutre(value: number) {
    this._resistanceNeutre = value
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

  get critique(): number {
    return this._critique
  }

  set critique(value: number) {
    this._critique = value
  }

  _vitalite = new BehaviorSubject<number>(100)

  _force = new BehaviorSubject<number>(100)

  _intelligence = new BehaviorSubject<number>(100)

  _chance = new BehaviorSubject<number>(100)

  _agilite = new BehaviorSubject<number>(100)

  updateVitalite(value: number): void {
    this._vitalite.next(value += this._vitalite.getValue())
  }

  resetVitalite(): void {
    this._vitalite.next(100)
  }

  updateForce(value: number): void {
    this._force.next(value += this._force.getValue())
  }

  resetForce(): void {
    this._force.next(100)
  }

  updateIntelligence(value: number): void {
    this._intelligence.next(value += this._intelligence.getValue())
  }

  resetIntelligence(): void {
    this._intelligence.next(100)
  }

  updateChance(value: number): void {
    this._chance.next(value += this._chance.getValue())
  }

  resetChance(): void {
    this._chance.next(100)
  }

  updateAgilite(value: number): void {
    this._agilite.next(value += this._agilite.getValue())
  }

  resetAgilite(): void {
    this._agilite.next(100)
  }
}
