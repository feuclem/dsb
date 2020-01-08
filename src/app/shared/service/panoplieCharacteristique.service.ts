import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class PanoplieCharacteristiqueService {
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
  _po = new BehaviorSubject<number>(0)
  _pa = new BehaviorSubject<number>(0)
  _pm = new BehaviorSubject<number>(0)
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

  _vitalite = new BehaviorSubject<number>(0)

  _force = new BehaviorSubject<number>(0)

  _intelligence = new BehaviorSubject<number>(0)

  _chance = new BehaviorSubject<number>(0)

  _agilite = new BehaviorSubject<number>(0)

  updateVitalite(value: number): void {
    this._vitalite.next(value += this._vitalite.getValue())
  }

  resetVitalite(): void {
    this._vitalite.next(0)
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

  resetDommagesNeutreArme() {
    this._dommagesNeutreArme.next(0)
  }

  updateDommagesNeutre(value: number) {
    this._dommagesNeutre.next(value += this._dommagesNeutre.getValue())
  }

  resetDommagesNeutre() {
    this._dommagesNeutreArme.next(0)
  }

  updateSagesse(value: number) {
    this._sagesse.next(value += this._sagesse.getValue())
  }

  resetSagesse() {
    this._sagesse.next(0)
  }

  updateDommages(value: number) {
    this._dommages.next(value += this._dommages.getValue())
  }

  resetDommages() {
    this._dommages.next(0)
  }

  updatePuissance(value: number) {
    this._puissance.next(value += this._puissance.getValue())
  }

  resetPuissance() {
    this._puissance.next(0)
  }

  updateDommagesTerre(value: number) {
    this._dommagesTerre.next(value += this._dommagesTerre.getValue())
  }

  resetDommagesTerre() {
    this._dommagesTerre.next(0)
  }

  updateDommagesTerreArme(value: number) {
    this._dommagesTerreArme.next(value += this._dommagesTerreArme.getValue())
  }

  resetDommagesTerreArme() {
    this._dommagesTerreArme.next(0)
  }

  updateDommagesFeu(value: number) {
    this._dommagesFeu.next(value += this._dommagesFeu.getValue())
  }

  resetDommagesFeu() {
    this._dommagesFeu.next(0)
  }

  updateDommagesFeuArme(value: number) {
    this._dommagesFeuArme.next(value += this._dommagesFeuArme.getValue())
  }

  resetDommagesFeuArme() {
    this._dommagesFeuArme.next(0)
  }

  updateDommagesEau(value: number) {
    this._dommagesEau.next(value += this._dommagesEau.getValue())
  }

  resetDommagesEau() {
    this._dommagesEau.next(0)
  }

  updateDommagesEauArme(value: number) {
    this._dommagesEauArme.next(value += this._dommagesEauArme.getValue())
  }

  resetDommagesEauArme() {
    this._dommagesEauArme.next(0)
  }

  updateDommagesAir(value: number) {
    this._dommagesAir.next(value += this._dommagesAir.getValue())
  }

  resetDommagesAir() {
    this._dommagesAir.next(0)
  }

  updateDommagesAirArme(value: number) {
    this._dommagesAirArme.next(value += this._dommagesAirArme.getValue())
  }

  resetDommagesAirArme() {
    this._dommagesAirArme.next(0)
  }

  updateFuite(value: number) {
    this._fuite.next(value += this._fuite.getValue())
  }

  resetFuite() {
    this._fuite.next(0)
  }

  updateTacle(value: number) {
    this._tacle.next(value += this._tacle.getValue())
  }

  resetTacle() {
    this._tacle.next(0)
  }

  updatePo(value: number) {
    this._po.next(value += this._po.getValue())
  }

  resetPo() {
    this._po.next(0)
  }

  updatePa(value: number) {
    this._pa.next(value += this._pa.getValue())
  }

  resetPa() {
    this._pa.next(0)
  }

  updatePm(value: number) {
    this._pm.next(value += this._pm.getValue())
  }

  resetPm() {
    this._pm.next(0)
  }

  updateRetraitPa(value: number) {
    this._retraitPa.next(value += this._retraitPa.getValue())
  }

  resetRetraitPa() {
    this._retraitPa.next(0)
  }

  updateRetraitPm(value: number) {
    this._retraitPm.next(value += this._retraitPm.getValue())
  }

  resetRetraitPm() {
    this._retraitPm.next(0)
  }

  updateEsquivePa(value: number) {
    this._esquivePa.next(value += this._esquivePa.getValue())
  }

  resetEsquivePa() {
    this._esquivePa.next(0)
  }

  updateEsquivePm(value: number) {
    this._esquivePm.next(value += this._esquivePm.getValue())
  }

  resetEsquivePm() {
    this._esquivePm.next(0)
  }

  updateResistanceFixeNeutre(value: number) {
    this._resistanceFixeNeutre.next(value += this._resistanceFixeNeutre.getValue())
  }

  resetResistanceFixeNeutre() {
    this._resistanceFixeNeutre.next(0)
  }

  updateResistanceFixeTerre(value: number) {
    this._resistanceFixeTerre.next(value += this._resistanceFixeTerre.getValue())
  }

  resetResistanceFixeTerre() {
    this._resistanceFixeTerre.next(0)
  }

  updateResistanceFixeFeu(value: number) {
    this._resistanceFixeFeu.next(value += this._resistanceFixeFeu.getValue())
  }

  resetResistanceFixeFeu() {
    this._resistanceFixeFeu.next(0)
  }

  updateResistanceFixeEau(value: number) {
    this._resistanceFixeEau.next(value += this._resistanceFixeEau.getValue())
  }

  resetResistanceFixeEau() {
    this._resistanceFixeEau.next(0)
  }

  updateResistanceFixeAir(value: number) {
    this._resistanceFixeAir.next(value += this._resistanceFixeAir.getValue())
  }

  resetResistanceFixeAir() {
    this._resistanceFixeAir.next(0)
  }

  updateResistanceCritiques(value: number) {
    this._resistanceCritiques.next(value += this._resistanceCritiques.getValue())
  }

  resetResistanceCritiques() {
    this._resistanceCritiques.next(0)
  }

  updateResistancePoussees(value: number) {
    this._resistancePoussees.next(value += this._resistancePoussees.getValue())
  }

  resetResistancePoussees() {
    this._resistancePoussees.next(0)
  }

  updateSoin(value: number) {
    this._soin.next(value += this._soin.getValue())
  }

  resetSoin() {
    this._soin.next(0)
  }

  updatePods(value: number) {
    this._pods.next(value += this._pods.getValue())
  }

  resetPods() {
    this._pods.next(0)
  }

  updateDommagesCritiques(value: number) {
    this._dommagesCritiques.next(value += this._dommagesCritiques.getValue())
  }

  resetDommagesCritiques() {
    this._dommagesCritiques.next(0)
  }

  updateDommagesPoussee(value: number) {
    this._dommagesPoussee.next(value += this._dommagesPoussee.getValue())
  }

  resetDommagesPoussee() {
    this._dommagesPoussee.next(0)
  }

  updateDommagesMelee(value: number) {
    this._dommagesMelee.next(value += this._dommagesMelee.getValue())
  }

  resetDommagesMelee() {
    this._dommagesMelee.next(0)
  }

  updateDommagesDistance(value: number) {
    this._dommagesDistance.next(value += this._dommagesDistance.getValue())
  }

  resetDommagesDistance() {
    this._dommagesDistance.next(0)
  }

  updatePuissancePiege(value: number) {
    this._puissancePiege.next(value += this._puissancePiege.getValue())
  }

  resetPuissancePiege() {
    this._puissancePiege.next(0)
  }

  updateDommagesPiege(value: number) {
    this._dommagesPiege.next(value += this._dommagesPiege.getValue())
  }

  resetDommagesPiege() {
    this._dommagesPiege.next(0)
  }

  updateDommagesAuxSorts(value: number) {
    this._dommagesAuxSorts.next(value += this._dommagesAuxSorts.getValue())
  }

  resetDommagesAuxSorts() {
    this._dommagesAuxSorts.next(0)
  }

  updateProspection(value: number) {
    this._prospection.next(value += this._prospection.getValue())
  }

  resetProspection() {
    this._prospection.next(0)
  }

  updateInvocation(value: number) {
    this._invocation.next(value += this._invocation.getValue())
  }

  resetInvocation() {
    this._invocation.next(0)
  }

  updateInitiative(value: number) {
    this._initiative.next(value += this._initiative.getValue())
  }

  resetInitiative() {
    this._initiative.next(0)
  }

  updateResistanceNeutre(value: number) {
    this._resistanceNeutre.next(value += this._resistanceNeutre.getValue())
  }

  resetResistanceNeutre() {
    this._resistanceNeutre.next(0)
  }

  updateResistanceTerre(value: number) {
    this._resistanceTerre.next(value += this._resistanceTerre.getValue())
  }

  resetResistanceTerre() {
    this._resistanceTerre.next(0)
  }

  updateResistanceFeu(value: number) {
    this._resistanceFeu.next(value += this._resistanceFeu.getValue())
  }

  resetResistanceFeu() {
    this._resistanceFeu.next(0)
  }

  updateResistanceEau(value: number) {
    this._resistanceEau.next(value += this._resistanceEau.getValue())
  }

  resetResistanceEau() {
    this._resistanceEau.next(0)
  }

  updateResistanceAir(value: number) {
    this._resistanceAir.next(value += this._resistanceAir.getValue())
  }

  resetResistanceAir() {
    this._resistanceAir.next(0)
  }

  updateResistanceDistance(value: number) {
    this._resistanceDistance.next(value += this._resistanceDistance.getValue())
  }

  resetResistanceDistance() {
    this._resistanceDistance.next(0)
  }

  updateResistanceMelee(value: number) {
    this._resistanceMelee.next(value += this._resistanceMelee.getValue())
  }

  resetResistanceMelee() {
    this._resistanceMelee.next(0)
  }

  updateCritique(value: number) {
    this._critique.next(value += this._critique.getValue())
  }

  resetCritique() {
    this._critique.next(0)
  }

  resetAllCharacteristique() {
    this.resetVitalite()
    this.resetForce()
    this.resetIntelligence()
    this.resetChance()
    this.resetAgilite()
    this.resetDommagesNeutreArme()
    this.resetDommagesNeutre()
    this.resetSagesse()
    this.resetDommages()
    this.resetPuissance()
    this.resetDommagesTerre()
    this.resetDommagesTerreArme()
    this.resetDommagesFeu()
    this.resetDommagesFeuArme()
    this.resetDommagesEau()
    this.resetDommagesEauArme()
    this.resetDommagesAir()
    this.resetDommagesAirArme()
    this.resetFuite()
    this.resetTacle()
    this.resetPo()
    this.resetPa()
    this.resetPm()
    this.resetRetraitPa()
    this.resetRetraitPm()
    this.resetEsquivePa()
    this.resetEsquivePm()
    this.resetResistanceFixeNeutre()
    this.resetResistanceFixeTerre()
    this.resetResistanceFixeFeu()
    this.resetResistanceFixeEau()
    this.resetResistanceFixeAir()
    this.resetResistanceCritiques()
    this.resetResistancePoussees()
    this.resetSoin()
    this.resetPods()
    this.resetDommagesCritiques()
    this.resetDommagesPoussee()
    this.resetDommagesMelee()
    this.resetDommagesDistance()
    this.resetPuissancePiege()
    this.resetDommagesPiege()
    this.resetDommagesAuxSorts()
    this.resetProspection()
    this.resetInvocation()
    this.resetInitiative()
    this.resetResistanceNeutre()
    this.resetResistanceTerre()
    this.resetResistanceFeu()
    this.resetResistanceEau()
    this.resetResistanceAir()
    this.resetResistanceDistance()
    this.resetResistanceMelee()
    this.resetCritique()
  }
}
