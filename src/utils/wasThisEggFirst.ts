import { Egg } from '../classes';

/**
 * Will determine if the provided egg was first
 *
 * @param egg The egg that we assume was before anything.
 * @returns If this egg actually was before anything.
 *
 * Usage:
 * ```js
 * const answer = wasThisEggFirst(egg) // true or false
 * ```
 */
export function wasThisEggFirst(egg: Egg): boolean {
  console.log('wuzzssss');
  if (egg.origin) {
    return false; // Nah, it goes deeper!
  }
  return true; // Yes! Chicken was first!
}
