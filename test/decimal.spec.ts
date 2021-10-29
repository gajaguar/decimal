import { Decimal } from '../src'

describe('Decimal', () => {
  it('should be able to create an instance', () => {
    const decimal = new Decimal(1, 1)

    const result = decimal instanceof Decimal

    expect(result).toBeTruthy()
  })

  it('should return a float as primitive value', () => {
    const decimal = new Decimal(1, 1)

    const result = Number(decimal)

    expect(result).toBe(0.1)
  })

  it('should take the absolute value of `positions` parameter', () => {
    const decimal = new Decimal(1, -1)

    const result = Number(decimal)

    expect(result).toBe(0.1)
  })

  it('can receive strings as parameters', () => {
    const decimal: Decimal = new Decimal('1', '1')

    const result = Number(decimal)

    expect(result).toBe(0.1)
  })

  it('should set `positions` to 0 if it not specified', () => {
    const decimal: Decimal = new Decimal(1)

    const result = Number(decimal)

    expect(result).toBe(1)
  })

  it('can execute `isDecimal` static method', () => {
    const func = Decimal.isDecimal

    const result = typeof func

    expect(result).toMatch('function')
  })
})
