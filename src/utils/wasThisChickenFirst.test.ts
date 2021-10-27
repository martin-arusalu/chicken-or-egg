import { wasThisChickenFirst } from "./wasThisChickenFirst";
import { Chicken, Egg } from "../classes";

describe('wasThisChickenFirst', () => {
  describe('when provided chicken was first', () => {
    const chicken = {} as Chicken;

    test('should return true', () => {
      expect(wasThisChickenFirst({ chicken })).toBe(true);
    });
  });
  describe('when provided chicken was not first', () => {
    const egg = {} as Egg;
    const chicken = new Chicken(egg);

    test('should return false', () => {
      expect(wasThisChickenFirst({ chicken })).toBe(false);
    });
  });
});
