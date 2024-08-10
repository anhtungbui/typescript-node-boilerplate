import { sum } from '../src/index'

test('sum() should return the correct sum of two numbers', () => {
  expect(sum(2, 3)).toBe(5)
  expect(sum(-5, 10)).toBe(5)
  expect(sum(0, 0)).toBe(0)
})
