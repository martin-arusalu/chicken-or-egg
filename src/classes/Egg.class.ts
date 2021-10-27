import { Chicken } from './Chicken.class';

/**
 * This class represents the Egg,
 * which might have been before Chicken.
 * But it had to be hatched by one...?
 *
 * Usage:
 * ```js
 * const egg = new Egg(origin: Chicken);
 * ```
 */
export class Egg {
  /**
   * An egg had to be hatched by a chicken right?
   **/
  origin: Chicken;

  /**
   * @param origin The chicken who hatched the egg.
   */
  constructor(origin: Chicken) {
    this.origin = origin;
  }
}
