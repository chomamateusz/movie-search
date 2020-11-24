import { calculateRating } from './calculateRating'

describe('calculateRating', () => {

  it('should calculate rating with %', () => {
    const result = calculateRating('92%')

    expect(result).toEqual({
      valid: true,
      rating: 92,
      base: 100,
    })
  })

  it('should calculate rating with X/10', () => {
    const result = calculateRating('8.6/10')

    expect(result).toEqual({
      valid: true,
      rating: 86,
      base: 100,
    })
  })

  it('should calculate rating with X/100', () => {
    const result = calculateRating('90/100')

    expect(result).toEqual({
      valid: true,
      rating: 90,
      base: 100,
    })
  })

  it('should return invalid on unknown rating format v1', () => {
    const result = calculateRating('****')

    expect(result).toEqual({valid: false})
  })

  it('should return invalid on unknown rating format v2', () => {
    const result = calculateRating('a/b')

    expect(result).toEqual({valid: false})
  })

  it('should return invalid on unknown rating format v3', () => {
    const result = calculateRating('a%')

    expect(result).toEqual({valid: false})
  })

})
