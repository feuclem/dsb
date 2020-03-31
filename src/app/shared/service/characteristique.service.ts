import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class CharacteristiqueService {
  _dommagesNeutreArme = new BehaviorSubject<number>(0)
  _dommagesNeutre = new BehaviorSubject<number>(0)
  _sagesse = new BehaviorSubject<number>(0)
  _dommages = new BehaviorSubject<number>(0)
  _puissance = new BehaviorSubject<number>(0)
  _dommagesTerre = new BehaviorSubject<number>(0)
  _dommagesTerreArme = new BehaviorSubject<number>(0)
  _dommagesFeu = new BehaviorSubject<number>(0)
  _dommagesFeuArme = new BehaviorSubject<number>(0)
  _dommagesEau = new BehaviorSubject<number>(0)
  _dommagesEauArme = new BehaviorSubject<number>(0)
  _dommagesAir = new BehaviorSubject<number>(0)
  _dommagesAirArme = new BehaviorSubject<number>(0)
  _fuite = new BehaviorSubject<number>(0)
  _tacle = new BehaviorSubject<number>(0)
  _po = new BehaviorSubject<number>(1)
  _pa = new BehaviorSubject<number>(7)
  _pm = new BehaviorSubject<number>(3)
  _retraitPa = new BehaviorSubject<number>(0)
  _retraitPm = new BehaviorSubject<number>(0)
  _esquivePa = new BehaviorSubject<number>(0)
  _esquivePm = new BehaviorSubject<number>(0)
  _resistanceFixeNeutre = new BehaviorSubject<number>(0)
  _resistanceFixeTerre = new BehaviorSubject<number>(0)
  _resistanceFixeFeu = new BehaviorSubject<number>(0)
  _resistanceFixeEau = new BehaviorSubject<number>(0)
  _resistanceFixeAir = new BehaviorSubject<number>(0)
  _resistanceCritiques = new BehaviorSubject<number>(0)
  _resistancePoussees = new BehaviorSubject<number>(0)
  _soin = new BehaviorSubject<number>(0)
  _pods = new BehaviorSubject<number>(0)
  _dommagesCritiques = new BehaviorSubject<number>(0)
  _dommagesPoussee = new BehaviorSubject<number>(0)
  _dommagesMelee = new BehaviorSubject<number>(0)
  _dommagesDistance = new BehaviorSubject<number>(0)
  _puissancePiege = new BehaviorSubject<number>(0)
  _dommagesPiege = new BehaviorSubject<number>(0)
  _dommagesAuxSorts = new BehaviorSubject<number>(0)
  _prospection = new BehaviorSubject<number>(0)
  _invocation = new BehaviorSubject<number>(0)
  _initiative = new BehaviorSubject<number>(0)
  _resistanceNeutre = new BehaviorSubject<number>(0)
  _resistanceTerre = new BehaviorSubject<number>(0)
  _resistanceFeu = new BehaviorSubject<number>(0)
  _resistanceEau = new BehaviorSubject<number>(0)
  _resistanceAir = new BehaviorSubject<number>(0)
  _resistanceDistance = new BehaviorSubject<number>(0)
  _resistanceMelee = new BehaviorSubject<number>(0)
  _critique = new BehaviorSubject<number>(0)

  _vitalite = new BehaviorSubject<number>(1050)

  _force = new BehaviorSubject<number>(0)

  _intelligence = new BehaviorSubject<number>(0)

  _chance = new BehaviorSubject<number>(0)

  _agilite = new BehaviorSubject<number>(0)

  _parchoVitalite = new BehaviorSubject<number>(100)

  _parchoForce = new BehaviorSubject<number>(100)

  _parchoIntelligence = new BehaviorSubject<number>(100)

  _parchoChance = new BehaviorSubject<number>(100)

  _parchoAgilite = new BehaviorSubject<number>(100)

  hasExoPa: Boolean = false
  hasExoPm: Boolean = false
  hasExoPo: Boolean = false
  hasExoInvo: Boolean = false

  updateVitalite(value: number): void {
    this._vitalite.next(value += this._vitalite.getValue())
  }

  resetVitalite(): void {
    this._vitalite.next(1050)
  }

  updateForce(value: number): void {
    this._force.next(value += this._force.getValue())
  }

  resetForce(): void {
    this._force.next(0)
  }

  updateIntelligence(value: number): void {
    this._intelligence.next(value += this._intelligence.getValue())
  }

  resetIntelligence(): void {
    this._intelligence.next(0)
  }

  updateChance(value: number): void {
    this._chance.next(value += this._chance.getValue())
  }

  resetChance(): void {
    this._chance.next(0)
  }

  updateAgilite(value: number): void {
    this._agilite.next(value += this._agilite.getValue())
  }

  resetAgilite(): void {
    this._agilite.next(0)
  }

  updateDommagesNeutreArme(value: number) {
    this._dommagesNeutreArme.next(value += this._dommagesNeutreArme.getValue())
  }

  updateDommagesNeutre(value: number) {
    this._dommagesNeutre.next(value += this._dommagesNeutre.getValue())
  }

  updateSagesse(value: number) {
    this._sagesse.next(value += this._sagesse.getValue())
  }

  updateDommages(value: number) {
    this._dommages.next(value += this._dommages.getValue())
  }

  updatePuissance(value: number) {
    this._puissance.next(value += this._puissance.getValue())
  }

  updateDommagesTerre(value: number) {
    this._dommagesTerre.next(value += this._dommagesTerre.getValue())
  }

  updateDommagesTerreArme(value: number) {
    this._dommagesTerreArme.next(value += this._dommagesTerreArme.getValue())
  }

  updateDommagesFeu(value: number) {
    this._dommagesFeu.next(value += this._dommagesFeu.getValue())
  }

  updateDommagesFeuArme(value: number) {
    this._dommagesFeuArme.next(value += this._dommagesFeuArme.getValue())
  }

  updateDommagesEau(value: number) {
    this._dommagesEau.next(value += this._dommagesEau.getValue())
  }

  updateDommagesEauArme(value: number) {
    this._dommagesEauArme.next(value += this._dommagesEauArme.getValue())
  }

  updateDommagesAir(value: number) {
    this._dommagesAir.next(value += this._dommagesAir.getValue())
  }

  updateDommagesAirArme(value: number) {
    this._dommagesAirArme.next(value += this._dommagesAirArme.getValue())
  }

  updateFuite(value: number) {
    this._fuite.next(value += this._fuite.getValue())
  }

  updateTacle(value: number) {
    this._tacle.next(value += this._tacle.getValue())
  }

  updatePo(value: number) {
    this._po.next(value += this._po.getValue())
  }

  updatePa(value: number) {
    this._pa.next(value += this._pa.getValue())
  }

  updatePm(value: number) {
    this._pm.next(value += this._pm.getValue())
  }

  updateRetraitPa(value: number) {
    this._retraitPa.next(value += this._retraitPa.getValue())
  }

  updateRetraitPm(value: number) {
    this._retraitPm.next(value += this._retraitPm.getValue())
  }

  updateEsquivePa(value: number) {
    this._esquivePa.next(value += this._esquivePa.getValue())
  }

  updateEsquivePm(value: number) {
    this._esquivePm.next(value += this._esquivePm.getValue())
  }

  updateResistanceFixeNeutre(value: number) {
    this._resistanceFixeNeutre.next(value += this._resistanceFixeNeutre.getValue())
  }

  updateResistanceFixeTerre(value: number) {
    this._resistanceFixeTerre.next(value += this._resistanceFixeTerre.getValue())
  }

  updateResistanceFixeFeu(value: number) {
    this._resistanceFixeFeu.next(value += this._resistanceFixeFeu.getValue())
  }

  updateResistanceFixeEau(value: number) {
    this._resistanceFixeEau.next(value += this._resistanceFixeEau.getValue())
  }

  updateResistanceFixeAir(value: number) {
    this._resistanceFixeAir.next(value += this._resistanceFixeAir.getValue())
  }

  updateResistanceCritiques(value: number) {
    this._resistanceCritiques.next(value += this._resistanceCritiques.getValue())
  }

  updateResistancePoussees(value: number) {
    this._resistancePoussees.next(value += this._resistancePoussees.getValue())
  }

  updateSoin(value: number) {
    this._soin.next(value += this._soin.getValue())
  }

  updatePods(value: number) {
    this._pods.next(value += this._pods.getValue())
  }

  updateDommagesCritiques(value: number) {
    this._dommagesCritiques.next(value += this._dommagesCritiques.getValue())
  }

  updateDommagesPoussee(value: number) {
    this._dommagesPoussee.next(value += this._dommagesPoussee.getValue())
  }

  updateDommagesMelee(value: number) {
    this._dommagesMelee.next(value += this._dommagesMelee.getValue())
  }

  updateDommagesDistance(value: number) {
    this._dommagesDistance.next(value += this._dommagesDistance.getValue())
  }

  updatePuissancePiege(value: number) {
    this._puissancePiege.next(value += this._puissancePiege.getValue())
  }

  updateDommagesPiege(value: number) {
    this._dommagesPiege.next(value += this._dommagesPiege.getValue())
  }

  updateDommagesAuxSorts(value: number) {
    this._dommagesAuxSorts.next(value += this._dommagesAuxSorts.getValue())
  }

  updateProspection(value: number) {
    this._prospection.next(value += this._prospection.getValue())
  }

  updateInvocation(value: number) {
    this._invocation.next(value += this._invocation.getValue())
  }

  updateInitiative(value: number) {
    this._initiative.next(value += this._initiative.getValue())
  }

  updateResistanceNeutre(value: number) {
    this._resistanceNeutre.next(value += this._resistanceNeutre.getValue())
  }

  updateResistanceTerre(value: number) {
    this._resistanceTerre.next(value += this._resistanceTerre.getValue())
  }

  updateResistanceFeu(value: number) {
    this._resistanceFeu.next(value += this._resistanceFeu.getValue())
  }

  updateResistanceEau(value: number) {
    this._resistanceEau.next(value += this._resistanceEau.getValue())
  }

  updateResistanceAir(value: number) {
    this._resistanceAir.next(value += this._resistanceAir.getValue())
  }

  updateResistanceDistance(value: number) {
    this._resistanceDistance.next(value += this._resistanceDistance.getValue())
  }

  updateResistanceMelee(value: number) {
    this._resistanceMelee.next(value += this._resistanceMelee.getValue())
  }

  updateCritique(value: number) {
    this._critique.next(value += this._critique.getValue())
  }

  resetAllCharacristique() {
    this._dommagesNeutreArme.next(0)
    this._dommagesNeutre.next(0)
    this._sagesse.next(0)
    this._dommages.next(0)
    this._puissance.next(0)
    this._dommagesTerre.next(0)
    this._dommagesTerreArme.next(0)
    this._dommagesFeu.next(0)
    this._dommagesFeuArme.next(0)
    this._dommagesEau.next(0)
    this._dommagesEauArme.next(0)
    this._dommagesAir.next(0)
    this._dommagesAirArme.next(0)
    this._fuite.next(0)
    this._tacle.next(0)
    this._po.next(1)
    this._pa.next(7)
    this._pm.next(3)
    this._retraitPa.next(0)
    this._retraitPm.next(0)
    this._esquivePa.next(0)
    this._esquivePm.next(0)
    this._resistanceFixeNeutre.next(0)
    this._resistanceFixeTerre.next(0)
    this._resistanceFixeFeu.next(0)
    this._resistanceFixeEau.next(0)
    this._resistanceFixeAir.next(0)
    this._resistanceCritiques.next(0)
    this._resistancePoussees.next(0)
    this._soin.next(0)
    this._pods.next(0)
    this._dommagesCritiques.next(0)
    this._dommagesPoussee.next(0)
    this._dommagesMelee.next(0)
    this._dommagesDistance.next(0)
    this._puissancePiege.next(0)
    this._dommagesPiege.next(0)
    this._dommagesAuxSorts.next(0)
    this._prospection.next(0)
    this._invocation.next(0)
    this._initiative.next(0)
    this._resistanceNeutre.next(0)
    this._resistanceTerre.next(0)
    this._resistanceFeu.next(0)
    this._resistanceEau.next(0)
    this._resistanceAir.next(0)
    this._resistanceDistance.next(0)
    this._resistanceMelee.next(0)
    this._critique.next(0)
    this._vitalite.next(1050)
    this._force.next(0)
    this._intelligence.next(0)
    this._chance.next(0)
    this._agilite.next(0)

    this._parchoVitalite.next(100)
    this._parchoForce.next(100)
    this._parchoIntelligence.next(100)
    this._parchoChance.next(100)
    this._parchoAgilite.next(100)

    this.hasExoPa = false
    this.hasExoPm = false
    this.hasExoPo = false
    this.hasExoInvo = false
  }
}
