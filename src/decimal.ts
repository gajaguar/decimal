import { isDecimal } from './is-decimal'
import { multiply } from './multiply'

export class Decimal {
  base: number
  positions: number
  static multiply = multiply
  static isDecimal = isDecimal

  /**
   * Class representing a decimal number.
   * @param base - Base value.
   * @param positions - Quantity of decimal places.
   */
  constructor(base: number | string, positions: number | string = 0) {
    this.base = Number(base)
    this.positions = Math.abs(Number(positions))
  }

  /**
   * Overwrite the `valueOf` method.
   * @returns - Float number as primitive value.
   */
  valueOf = (): number => Number(this.base + 'e-' + this.positions)
}
