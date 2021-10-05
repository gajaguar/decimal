import { Decimal } from '../src'
import { isDecimal } from '../src/is-decimal'

describe('isDecimal', () => {
  it('should return false if a number is passed', () => {
    const num = 1

    const result = isDecimal(num)

    expect(result).toBeFalsy()
  })

  it('should return false if a string is passed', () => {
    const str = '1'

    const result = isDecimal(str)

    expect(result).toBeFalsy()
  })

  it('should return false if an object is passed', () => {
    const obj = {
      base: 1,
      positions: 3,
    }

    const result = isDecimal(obj)

    expect(result).toBeFalsy()
  })

  it('should return true if a Decimal is passed', () => {
    const dec = new Decimal(1)

    const result = isDecimal(dec)

    expect(result).toBeTruthy()
  })
})
