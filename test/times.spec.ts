import { Decimal } from '../src'
import { times } from '../src/times'

describe('times', () => {
  it('should return 10 if receive 2 and 5 as factors', () => {
    const factorA = new Decimal(2)
    const factorB = new Decimal(5)

    const result = Number(times(factorA, factorB))

    expect(result).toBe(10)
  })

  it('should return 0.15 if receive 0.3 and 0.05 as factors', () => {
    const factorA = new Decimal(3, 1)
    const factorB = new Decimal(5, 2)

    const result = Number(times(factorA, factorB))

    expect(result).toBe(0.015)
  })
})
