export class Statistique {
  from: number
  to: number
  label: String

  constructor(from: number, to: number, label: String) {
    this.from = from
    this.to = to
    this.label = label
  }
}

export class DommagesNeutreArme extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesNeutreArme')
  }
}

export class DommagesNeutre extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesNeutre')
  }
}

export class Force extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Force')
  }
}

export class Intelligence extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Intelligence')
  }
}

export class Chance extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Chance')
  }
}

export class Agilite extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Agilite')
  }
}

export class Puissance extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Puissance')
  }
}

export class Dommages extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Dommages')
  }
}

export class DommagesCritiques extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesCritiques')
  }
}

export class DommagesMelee extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesMelee')
  }
}

export class DommagesAuxSorts extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesAuxSorts')
  }
}

export class DommagesDistance extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesDistance')
  }
}

export class DommagesTerre extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesTerre')
  }
}

export class DommagesTerreArme extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesTerreArme')
  }
}

export class DommagesFeu extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesFeu')
  }
}

export class DommagesFeuArme extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesFeuArme')
  }
}

export class DommagesEau extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesEau')
  }
}

export class DommagesEauArme extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesEauArme')
  }
}

export class DommagesAir extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesAir')
  }
}

export class DommagesAirArme extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'DommagesAirArme')
  }
}

export class Vitalite extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Vitalité')
  }
}

export class Sagesse extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Sagesse')
  }
}

export class Fuite extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Fuite')
  }
}

export class Tacle extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Tacle')
  }
}

export class PA extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'PA')
  }
}

export class PM extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'PM')
  }
}

export class PO extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'PO')
  }
}

export class RetraitPM extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'RetraitPM')
  }
}

export class RetraitPA extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'RetraitPA')
  }
}

export class ResistanceNeutre extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceNeutre')
  }
}

export class ResistanceFixNeutre extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceNeutre')
  }
}

export class ResistanceTerre extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceTerre')
  }
}

export class ResistanceFixTerre extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceFixTerre')
  }
}

export class ResistanceFeu extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceFeu')
  }
}

export class ResistanceFixeFeu extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceFixeFeu')
  }
}

export class ResistanceEau extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceEau')
  }
}

export class ResistanceFixeEau extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceFixeEau')
  }
}

export class ResistanceAir extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceAir')
  }
}

export class ResistanceFixeAir extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceFixeAir')
  }
}

export class ResistanceCritiques extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistanceCritiques')
  }
}

export class ResistancePoussees extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'ResistancePoussees')
  }
}

export class Critique extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Critique')
  }
}

export class Pods extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Pods')
  }
}

export class Soins extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to, 'Soins')
  }
}

export class ArmeDeChasse extends Statistique {
  constructor() {
    super(0, 0, 'ArmeDeChasse')
  }
}

export function ResistanceFactory(element: String, from: number, to: number) {
    if (element === 'Neutre') {
      return new ResistanceNeutre(from, to)
    }
    if (element === 'Terre') {
      return new ResistanceTerre(from, to)
    }
    if (element === 'Feu') {
      return new ResistanceFeu(from, to)
    }
    if (element === 'Eau') {
      return new ResistanceEau(from, to)
    }
    if (element === 'Air') {
      return new ResistanceAir(from, to)
    }
}
