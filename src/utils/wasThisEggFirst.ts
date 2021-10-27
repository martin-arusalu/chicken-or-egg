import { Egg } from '../classes';

/**
 * Arguments for wasThisEggFirst function
 */
interface WasThisEggFirstParams {
  /**
   * The egg that we suggest was before anything.
   */
  egg: Egg;
}

/**
 * Will determine if the provided egg was first
 *
 * @param WasThisEggFirstParams The egg that we suggest was before anything.
 * @returns If this egg actually was before anything.
 *
 * Usage:
 * ```js
 * const answer = wasThisEggFirst(egg) // true or false
 * ```
 */
export function wasThisEggFirst({ egg }: WasThisEggFirstParams): boolean {
  if (egg.origin) {
    return false; // Nah, it goes deeper!
  }
  return true; // Yes! Chicken was first!
}
