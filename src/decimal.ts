export class Decimal {
  base: number
  positions: number

  /**
   * Class representing a decimal number.
   * @param base - Base value.
   * @param positions - Quantity of decimal places.
   */
  constructor(base: number | string, positions: number | string) {
    this.base = Number(base)
    this.positions = Math.abs(Number(positions))
  }

  /**
   * Overwrite the `valueOf` method.
   * @returns - Float number as primitive value.
   */
  valueOf = (): number => Number(this.base + 'e-' + this.positions)
}
