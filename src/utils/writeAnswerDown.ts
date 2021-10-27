import * as fs from 'fs';
import { ANSWER_FILE } from './constants';

/**
 * When correct answer reached, will write it down to `answer.txt` file.
 * Will not return anything.
 *
 * @param answer answer to write into the file.
 *
 * Usage:
 * ```js
 * writeAnswerDown('chicken'); // Or
 * writeAnswerDown('egg');
 * ```
 */
export function writeAnswerDown(answer: string) {
  fs.writeFileSync(ANSWER_FILE, answer);
}
