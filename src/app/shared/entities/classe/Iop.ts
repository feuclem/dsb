import {Sorts} from '../Sorts'
import {SortsBoost} from '../SortsBoost'
import {SortsBoostZone} from '../SortsBoostZone'

export class Iop {
  pression = new Sorts('Pression', '../assets/pression.webp', 'terre', [24, 28], [29, 34])
  tannee = new Sorts('Tannée', '../assets/tannee.webp', 'air', [30, 34], [36, 41])
  intimidation = new Sorts('Intimidation', '../assets/intimidation.webp', 'neutre', [11, 13], [13, 16])
  deferlement = new Sorts('Déferlement', '../assets/deferlement.webp', 'eau', [38, 42], [46, 50])
  menace = new Sorts('Menace', '../assets/menace.webp', 'eau', [26, 28], [31, 34])
  epeedivine = new Sorts('Épée Divine', '../assets/epeedivine.webp', 'air', [26, 28], [31, 34])
  fendoir = new Sorts('Fendoir', '../assets/fendoir.webp', 'eau', [40, 45], [48, 54])
  epeedestructrice = new Sorts('Épée Destructrice', '../assets/epeedestructrice.webp', 'feu', [32, 36], [38, 43])
  anneaudestructeur = new Sorts('Anneau Destructeur', '../assets/anneaudestructeur.webp', 'air', [26, 30], [31, 36])
  concentration = new Sorts('Concentration', '../assets/concentration.webp', 'terre', [20, 24], [24, 29])
  accumulation = new SortsBoost(
    'Accumulation',
    '../assets/accumulation.webp', 'terre',
    [22, 26],
    [26, 31],
    'Augmente les dégâts de base du sort Accumulation de 20 (3 tours)',
    20)
  couperet = new Sorts('Couperet', '../assets/couperet.webp', 'feu', [18, 22], [22, 26])
  fracture = new Sorts('Fracture', '../assets/fracture.webp', 'air', [34, 38], [41, 46])
  epeedujugement = new Sorts('Épée du Jugement', '../assets/epeedujugement.webp', 'air-feu', [19, 21, 19, 21], [23, 25, 23, 25])
  condamnation = new Sorts('Condamnation', '../assets/condamnation.webp', 'air-feu', [25, 29, 25, 29, 41, 45], [])
  tempetedepuissance = new Sorts('Tempête de Puissance', '../assets/tempetedepuissance.webp', 'feu', [34, 38], [41, 46])
  tumulte = new SortsBoostZone(
    'Tumulte',
    '../assets/tumulte.webp',
    'feu',
    [19, 21],
    [23, 25],
    'Augmente les dégâts de base du sort Tumulte de 20',
    20,
    5)
  epeeceleste = new Sorts('Épée Céleste', '../assets/epeeceleste.webp', 'air', [28, 31], [34, 37])
  zenith = new Sorts('Zénith', '../assets/zenith.webp', 'air', [86, 94], [103, 113])
  ferveur = new Sorts('Ferveur', '../assets/ferveur.webp', 'eau', [24, 27], [29, 32])
  endurance = new Sorts('Endurance', '../assets/endurence.webp', 'eau', [34, 38], [41, 46])
  epeedeiop = new Sorts('Épée de Iop', '../assets/epeedeiop.webp', 'terre', [30, 33], [36, 39])
  pugilat = new SortsBoost(
    'Pugilat',
    '../assets/pugilat.webp',
    'terre',
    [9, 11],
    [11, 13],
    'Augmente les dégâts de base du sort Pugilat de 15',
    15)
  epeedudestin = new SortsBoost(
    'Épée du destin',
    '../assets/epeedudestin.webp',
    'feu',
    [38, 42],
    [46, 50],
    'Augmente les dégâts de base du sort Épée du destin de 30 (2 tours)',
    30)
  sentence = new Sorts('Sentence', '../assets/sentence.webp', 'feu', [13, 16], [16, 19])
  coleredeiop = new SortsBoost(
    'Colère de Iop',
    '../assets/coleredeiop.webp',
    'terre',
    [81, 100],
    [97, 120],
    'Augmente les dégâts de base du sort Colère de Iop de 90 (3 tours)',
    90)
  fureur = new SortsBoost(
    'Fureur',
    '../assets/fureur.webp',
    'terre',
    [28, 32],
    [34, 38],
    'Augmente les dégâts de base du sort Fureur de 30 (1 tour)',
    30)

  listSort() {
    return [
      this.pression,
      this.tannee,
      this.intimidation,
      this.deferlement,
      this.menace,
      this.epeedivine,
      this.fendoir,
      this.epeedestructrice,
      this.anneaudestructeur,
      this.concentration,
      this.accumulation,
      this.couperet,
      this.fracture,
      this.epeedujugement,
      this.condamnation,
      this.tempetedepuissance,
      this.tumulte,
      this.epeeceleste,
      this.zenith,
      this.ferveur,
      this.endurance,
      this.epeedeiop,
      this.pugilat,
      this.epeedudestin,
      this.sentence,
      this.coleredeiop,
      this.fureur
    ]
  }
}
