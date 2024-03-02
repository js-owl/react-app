import { classNames } from './classNames'

describe('classNames', () => {
  test('1 param', () => {
    expect(classNames('aaa')).toBe('aaa')
  }),
    test('2 params', () => {
      expect(classNames('aaa', {}, ['ccc'])).toBe('aaa ccc')
    }),
    test('3 params', () => {
      expect(classNames('aaa', { bbb: true }, ['ccc'])).toBe('aaa ccc bbb')
    }),
    test('4 params', () => {
      expect(classNames('aaa', { bbb: true, ddd: true }, ['ccc'])).toBe(
        'aaa ccc bbb ddd'
      )
    }),
    test('4 params, 1 false', () => {
      expect(classNames('aaa', { bbb: false, ddd: true }, ['ccc'])).toBe(
        'aaa ccc ddd'
      )
    })
})
