import * as fs from 'fs';
import { ANSWER_FILE, EGG } from '../constants';
import { writeAnswerDown } from './writeAnswerDown';

jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));

describe('writeAnswerDown', () => {
  describe('when provided an answer', () => {
    const answer = EGG;

    beforeEach(() => {
      writeAnswerDown(answer);
    });

    test('should write the answer to the answer file', () => {
      expect(fs.writeFileSync as jest.Mock).toHaveBeenCalledWith(
        ANSWER_FILE,
        answer
      );
    });
  });
});
