export interface CalculatedRating {
  valid: boolean,
  rating?: number,
  base?: number,
}

export const calculateRating = (rating: string): CalculatedRating => {
  const invalid = { valid: false }
  const valid = { valid: true, base: 100 }
  if(typeof rating !== 'string') return invalid

  if(rating.includes('%')){
    const value = Number(rating.replace('%', ''))
    if(Number.isNaN(value)) return invalid
    return {
      ...valid,
      rating: value,
    }
  }

  if(rating.includes('/')){
    const value = Number(rating.split('/')[0])
    const base = Number(rating.split('/')[1])
    if(Number.isNaN(value) || Number.isNaN(base)) return invalid
    return {
      ...valid,
      rating: value * 100 / base,
    }
  }

  return invalid
}

export default calculateRating
