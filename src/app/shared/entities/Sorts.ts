export class Sorts {
  label: string
  image: string
  type: string
  normal: number[]
  critique: number[]

  constructor(label: string, image: string, type: string,  normal: number[], critique: number[]) {
    this.label = label
    this.image = image
    this.type = type
    this.normal = normal
    this.critique = critique
  }

  static calcul(
    degatDeBase: number,
    puissance: number,
    caracteristiques: number,
    dommages: number,
    dommagesElemFixe: number,
    dommagesCritiques: number = 0,
    ...dommagesPourcentEnPlus
  ) {
    let baseDommage = degatDeBase + degatDeBase * ((puissance + caracteristiques) / 100) + (dommages + dommagesElemFixe + dommagesCritiques)
    if (dommagesPourcentEnPlus.length !== 0) {
      let accPourcentDommagesEnPlus = 0
      dommagesPourcentEnPlus.map(item => accPourcentDommagesEnPlus += item)
      baseDommage = baseDommage + baseDommage * (accPourcentDommagesEnPlus / 100)
    }
    return Math.round(baseDommage)
  }

  static calcul2(
    degatDuSort: number,
    caracteristiquesElem: number,
    puissance: number,
    dommages: number,
    dommagesElem: number,
    dommagesCritiques: number
  ) {
    const damageDeal = ((caracteristiquesElem + puissance + 100) / 100) * degatDuSort + (degatDuSort + dommagesElem + dommagesCritiques)
    return Math.round(damageDeal)
  }
}
