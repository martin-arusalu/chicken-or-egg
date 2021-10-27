import { Chicken } from '../classes';

/**
 * Will determine if the provided chicken was first
 *
 * @param chicken The chicken that we assume was before anything.
 * @returns If this chicken actually was before anything.
 *
 * Usage:
 * ```js
 * const answer = wasThisChickenFirst(chicken) // true or false
 * ```
 */
export function wasThisChickenFirst(chicken: Chicken): boolean {
  if (chicken.origin) {
    return false; // Nah, it goes deeper!
  }
  return true; // Yes! Chicken was first!
}
