export class Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    this.from = from
    this.to = to
  }
}

export class DommagesNeutre extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to)
  }
}

export class Force extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to)
  }
}

export class DommagesTerre extends Statistique {
  from: number
  to: number

  constructor(from: number, to: number) {
    super(from, to)
  }
}
