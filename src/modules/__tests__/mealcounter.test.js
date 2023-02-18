import { getTotalMeal } from '../mealcounter.js';

describe('Total meals count', () => {
  test('Count total meal items showing on homepage', () => {
    const mealsArray = [{}, {}, {}];
    const count = getTotalMeal(mealsArray);

    expect(mealsArray).toHaveLength(3);
    expect(count).toBe(3);
  });
});