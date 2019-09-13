export class StuffEquipementId {
  private _id: number
  private _type: String

  constructor(id: number, type: String) {
    this._id = id
    this._type = type
  }


  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get type(): String {
    return this._type
  }

  set type(value: String) {
    this._type = value
  }
}
