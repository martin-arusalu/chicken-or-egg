import { Chicken } from '../classes';

/**
 * Arguments for wasThisChickenFirst function
 */
interface WasThisChickenFirstParams {
  /**
   * The chicken that we suggest was before anything.
   */
  chicken: Chicken;
}

/**
 * Will determine if the provided chicken was first
 *
 * @param WasThisChickenFirstParams Arguments for wasThisChicken function.
 * @returns If this chicken actually was before anything.
 *
 * Usage:
 * ```js
 * const answer = wasThisChickenFirst(chicken) // true or false
 * ```
 */
export function wasThisChickenFirst({
  chicken,
}: WasThisChickenFirstParams): boolean {
  if (chicken.origin) {
    return false; // Nah, it goes deeper!
  }
  return true; // Yes! Chicken was first!
}
