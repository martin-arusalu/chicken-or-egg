import { Egg } from './Egg.class';

/**
 * This class represents the Chicken,
 * which might have been before the Egg.
 * But it had to come from one...?
 *
 * Usage:
 * ```js
 * const chicken = new Chicken(origin: Egg);
 * ```
 */
export class Chicken {
  /**
   * A chicken had to come from an egg right?
   **/
  origin: Egg;

  /**
   * @param origin The egg from which this chicken came from.
   */
  constructor(origin: Egg) {
    this.origin = origin;
  }
}
