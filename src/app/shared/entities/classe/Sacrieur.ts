import {Sorts} from '../Sorts'
import {SortsBoost} from '../SortsBoost'

export class Sacrieur {

  nervosite = new SortsBoost(
    'Nervosité',
    '../assets/sacrieur/nervosite.png',
    'eau',
    [21, 25],
    [25, 30],
    'Augmente les dégâts de base du sort Nervosité de 15 (2 tours)',
    15
  )
  dechainement = new SortsBoost(
    'Déchaînement',
    '../assets/sacrieur/dechainement.png',
    'eau',
    [32, 36],
    [38, 43],
    'Augmente les dégâts de base du sort Déchaînement de 20 (2 tours)',
    20
  )
  hemorragie = new Sorts(
    'Hémorragie',
    '../assets/sacrieur/hemmorragie.png',
    'air',
    [24, 28],
    [29, 34]
  )
  desolation = new Sorts(
    'Désolation',
    '../assets/sacrieur/desolation.png',
    'air',
    [28, 32],
    [34, 38]
  )
  baindesang = new Sorts(
    'Bain de Sang',
    '../assets/sacrieur/baindesang.png',
    'terre',
    [29, 34],
    [35, 41]
  )
  supplice = new Sorts(
    'Supplice',
    '../assets/sacrieur/supplice.png',
    'terre',
    [22, 26],
    [26, 31]
  )
  douleurcuisante = new SortsBoost(
    'Douleur Cuisante',
    '../assets/sacrieur/douleurcuisante.png',
    'feu',
    [21, 25],
    [25, 30],
    'Augmente les dégâts de base du sort Douleur Cuisante de 15 (2 tours)',
    15
  )
  immolation = new SortsBoost(
    'Immolation',
    '../assets/sacrieur/immolation.png',
    'feu',
    [33, 37],
    [40, 44],
    'Augmente les dégâts de base du sort Immolation de 20 (2 tours)',
    15
  )
  ravage = new Sorts(
    'Ravage',
    '../assets/sacrieur/ravage.png',
    'terre',
    [26, 30],
    [31, 36]
  )
  fulgurance = new Sorts(
    'Fulgurance',
    '../assets/sacrieur/fulgurance.png',
    'air',
    [23, 27],
    [28, 32]
  )
  assaut = new Sorts(
    'Assaut',
    '../assets/sacrieur/assaut.webp',
    'air',
    [15, 18],
    [18, 22]
  )
  aversion = new Sorts(
    'Aversion',
    '../assets/sacrieur/aversion.png',
    'feu',
    [12, 15],
    [15, 18]
  )
  condensation = new Sorts(
    'Condensation',
    '../assets/sacrieur/condensation.png',
    'eau',
    [21, 25],
    [25, 30]
  )
  afflux = new Sorts(
    'Afflux',
    '../assets/sacrieur/afflux.png',
    'terre',
    [12, 15],
    [15, 18]
  )
  hostilite = new Sorts(
    'Afflux',
    '../assets/sacrieur/hostilite.png',
    'feu',
    [14, 17],
    [18, 21]
  )
  projection = new Sorts(
    'Projection',
    '../assets/sacrieur/projection.png',
    'eau',
    [15, 18],
    [18, 22]
  )
  absorption = new Sorts(
    'Absorption',
    '../assets/sacrieur/absorption.png',
    'feu',
    [22, 26],
    [26, 31]
  )
  hecatombe = new Sorts(
    'Hécatombe',
    '../assets/sacrieur/hecatombe.png',
    'feu',
    [29, 33],
    [35, 40]
  )
  decimation = new SortsBoost(
    'Décimation',
    '../assets/sacrieur/decimation.png',
    'terre',
    [24, 28],
    [29, 34],
    'Augmente les dégâts de base du sort Décimation de 20 (2 tours)',
    20
  )
  entaille = new SortsBoost(
    'Entaille',
    '../assets/sacrieur/entaille.png',
    'terre',
    [35, 39],
    [42, 47],
    'Augmente les dégâts de base du sort Entaille de 30 (2 tours)',
    30
  )
  furie = new SortsBoost(
    'Furie',
    '../assets/sacrieur/furie.png',
    'air',
    [24, 28],
    [29, 34],
    'Augmente les dégâts de base du sort Furie de 20 (2 tours)',
    20
  )
  carnage = new SortsBoost(
    'Carnage',
    '../assets/sacrieur/carnage.png',
    'air',
    [35, 39],
    [42, 47],
    'Augmente les dégâts de base du sort Entaille de 30 (2 tours)',
    30
  )
  stase = new Sorts(
    'Stase',
    '../assets/sacrieur/stase.png',
    'eau',
    [22, 26],
    [26, 31]
  )
  dissolution = new Sorts(
    'Dissolution',
    '../assets/sacrieur/dissolution.png',
    'eau',
    [29, 33],
    [35, 40]
  )

  listSort() {
    return [
      this.nervosite,
      this.dechainement,
      this.hemorragie,
      this.desolation,
      this.baindesang,
      this.supplice,
      this.douleurcuisante,
      this.immolation,
      this.ravage,
      this.fulgurance,
      this.assaut,
      this.aversion,
      this.condensation,
      this.afflux,
      this.hostilite,
      this.projection,
      this.absorption,
      this.hecatombe,
      this.decimation,
      this.entaille,
      this.furie,
      this.carnage,
      this.stase,
      this.dissolution
    ]
  }
}
