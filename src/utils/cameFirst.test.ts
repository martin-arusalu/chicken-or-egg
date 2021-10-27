import { wasThisChickenFirst } from './wasThisChickenFirst';
import { Chicken, Egg } from '../classes';
import { CHICKEN, EGG } from '../constants';
import { cameFirst } from './cameFirst';
import { writeAnswerDown } from './writeAnswerDown';
import { wasThisEggFirst } from './wasThisEggFirst';

jest.mock('./writeAnswerDown');
jest.mock('./wasThisChickenFirst');
jest.mock('./wasThisEggFirst');

interface SetupArgs {
  candidate: Egg | Chicken;
  mockEggFirst: boolean;
  mockChickenFirst: boolean;
}
function setup({
  candidate,
  mockEggFirst,
  mockChickenFirst,
}: SetupArgs): Chicken | Egg {
  (wasThisChickenFirst as jest.Mock).mockReturnValue(mockChickenFirst);
  (wasThisEggFirst as jest.Mock).mockReturnValue(mockEggFirst);

  return cameFirst({ candidate });
}

describe('cameFirst', () => {
  describe('when provided chicken was first', () => {
    const egg = {} as Egg;
    const candidate = new Chicken(egg);
    let result: Chicken | Egg;

    beforeAll(() => {
      result = setup({
        candidate,
        mockEggFirst: false,
        mockChickenFirst: true,
      });
    });

    test('should write the answer down', () => {
      expect(writeAnswerDown as jest.Mock).toHaveBeenCalledWith(CHICKEN);
    });

    test('should return the chicken', () => {
      expect(result).toBe(candidate);
    });
  });

  describe('when provided egg was first', () => {
    const chicken = {} as Chicken;
    const candidate = new Egg(chicken);
    let result: Chicken | Egg;

    beforeAll(() => {
      result = setup({
        candidate,
        mockEggFirst: true,
        mockChickenFirst: false,
      });
    });

    test('should write the answer down', () => {
      expect(writeAnswerDown as jest.Mock).toHaveBeenCalledWith(EGG);
    });

    test('should return the egg', () => {
      expect(result).toBe(candidate);
    });
  });

  describe('when provided candidate was not first', () => {
    const chicken = {} as Chicken;
    const egg = new Egg(chicken);
    const candidate = new Chicken(egg);
    let result: Chicken | Egg;

    beforeAll(() => {
      result = setup({
        candidate,
        mockEggFirst: true,
        mockChickenFirst: false,
      });
    });

    test('should write the answer down', () => {
      expect(writeAnswerDown as jest.Mock).toHaveBeenCalledWith(EGG);
    });

    test('should return the actual origin', () => {
      expect(result).toBe(egg);
    });
  });
});
