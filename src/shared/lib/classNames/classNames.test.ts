import { classNames } from './classNames';

describe('classNames', () => {
  const adds = ['class1', 'class2'];

  test('with only 1 param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with adds', () => {
    expect(classNames('someClass', {}, adds)).toBe('someClass class1 class2');
  });

  test('with all params', () => {
    expect(classNames(
      'someClass',
      { hover: true, scrollable: true },
      adds,
    )).toBe('someClass class1 class2 hover scrollable');
  });

  test('with mod false and add null', () => {
    expect(classNames(
      'someClass',
      { hover: true, scrollable: false },
      [undefined, 'class1', null, ''],
    )).toBe('someClass class1 hover');
  });
});
