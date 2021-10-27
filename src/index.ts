import { Chicken, Egg } from './classes';
import { CHICKEN, EGG } from './constants';
import { wasThisChickenFirst, wasThisEggFirst, writeAnswerDown } from './utils';

/**
 * Input your hypothesis on which came first.
 * The final answer will be saved to `answer.txt` file.
 * And returned from function if you need to use it somewhere.
 *
 * Usage:
 * ```js
 * const candidate = egg // Your hypothesis
 * cameFirst(candidate) // Will return the real answer and save it to a file.
 * ```
 *
 * @param candidate Your hypothesis on which came first.
 * @returns The real answer. The origin. The root. Either Egg or Chicken.
 */
export function cameFirst(candidate: Chicken | Egg): Chicken | Egg {
  if (candidate instanceof Chicken && wasThisChickenFirst(candidate)) {
    writeAnswerDown(CHICKEN);
    return candidate;
  } else if (candidate instanceof Egg && wasThisEggFirst(candidate)) {
    writeAnswerDown(EGG);
    return candidate;
  }

  // It goes deeper...
  return cameFirst(candidate.origin);
}
