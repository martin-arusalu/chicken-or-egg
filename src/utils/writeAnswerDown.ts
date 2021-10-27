import * as fs from 'fs';

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
  fs.writeFileSync('answer.txt', answer);
}
