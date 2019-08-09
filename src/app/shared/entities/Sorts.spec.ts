import {Sorts} from './Sorts'

describe('calcul', () => {
  describe('when degatDeBase is 28 and puissance is 0 and caracteristiques is 10', () => {
    it('should return 31', () => {
      // When
      const result = Sorts.calcul(28, 0, 10, 0, 0)

      // Then
      expect(result).toEqual(31)
    })
  })
  describe('when degatDeBase is 28 and puissance is 30 and caracteristiques is 10 and dommagesPourcentEnPlus is 15', () => {
    it('should return 44', () => {
      // When
      const result = Sorts.calcul(28, 30, 10, 0, 0, 0, 15)

      // Then
      expect(result).toEqual(45)
    })
  })
  describe('when degatDeBase is 28 and puissance is 30 and caracteristiques is 10 and dommagesPourcentEnPlus is 15 and 20', () => {
    it('should return 53', () => {
      // When
      const result = Sorts.calcul(28, 30, 10, 0, 0, 0, 15, 20)

      // Then
      expect(result).toEqual(53)
    })
  })
})

