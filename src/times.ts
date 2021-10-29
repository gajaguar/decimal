import { Decimal } from '.'

/**
 * Multiply two Decimal instances.
 * @param factorA - First factor.
 * @param factorB - Second factor.
 * @returns - The result of the factors multiplication.
 */
export const times = (factorA: Decimal, factorB: Decimal): Decimal => {
  const base = factorA.base * factorB.base
  const positions = factorA.positions + factorB.positions
  const result = new Decimal(base, positions)

  return result
}
