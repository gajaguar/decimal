import { Decimal } from '../src'

/**
 * Verify if a number is ans instance of a Decimal class.
 * @param num - Item to verify.
 * @returns - An assertion.
 */
export const isDecimal = (
  num: Decimal | number | string | unknown
): boolean => {
  if (num instanceof Decimal) {
    return true
  } else {
    return false
  }
}
