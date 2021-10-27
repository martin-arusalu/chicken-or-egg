import { wasThisEggFirst } from "./wasThisEggFirst";
import { Chicken, Egg } from "../classes";

describe('wasThisEggFirst', () => {
  describe('when provided egg was first', () => {
    const egg = {} as Egg;

    test('should return true', () => {
      expect(wasThisEggFirst({ egg })).toBe(true);
    });
  });
  describe('when provided egg was not first', () => {
    const chicken = {} as Chicken;
    const egg = new Egg(chicken);

    test('should return false', () => {
      expect(wasThisEggFirst({ egg })).toBe(false);
    });
  });
});
