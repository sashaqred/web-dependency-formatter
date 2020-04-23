import { formatVersionByExample } from './formatVersionByExample';

const validRangeMap: Record<string, [string, string]> = {
  '1.2.3': ['9.8.7', '9.8.7'],
  '1.2.*': ['9.8.7', '9.8.*'],
  '1.*': ['9.8.7', '9.*'],
  '*': ['9.8.7', '*'],
  '1.2.X': ['9.8.7', '9.8.X'],
  '1.X': ['9.8.7', '9.X'],
  X: ['9.8.7', 'X'],
  '1.2.x': ['9.8.7', '9.8.x'],
  '1.x': ['9.8.7', '9.x'],
  x: ['9.8.7', 'x'],
  '~1.2.3': ['9.8.7', '~9.8.7'],
  '~1.2': ['9.8.7', '~9.8'],
  '~1': ['9.8.7', '~9'],
  '^1.2.3': ['9.8.7', '^9.8.7'],
  '^1.2': ['9.8.7', '^9.8'],
  '^1': ['9.8.7', '^9'],
};

Object.entries(validRangeMap).forEach(([exampleRange, [version, resultVersion]]) => {
  it(`Convert ${version} with ${exampleRange} pattern`, () => {
    expect(formatVersionByExample(version, exampleRange)).toEqual(resultVersion);
  });
});

const invalidRangeMap = {
  '1.2.3': 'A',
  '1.2.': '9.8.7',
  '1.': '9.8.7',
  A: '9.8.7',
  '1.*.': '9.8.7',
  '*.': '9.8.7',
  '1.X.': '9.8.7',
  'X.': '9.8.7',
  '1.x.': '9.8.7',
  'x.': '9.8.7',
  '~1.2.': '9.8.7',
  '~1.': '9.8.7',
  '^1.2.': '9.8.7',
  '^1.': '9.8.7',
};

Object.entries(invalidRangeMap).forEach(([exampleRange, version]) => {
  it(`Illegal convert ${version} with ${exampleRange} pattern`, () => {
    expect(formatVersionByExample(version, exampleRange)).toEqual(undefined);
  });
});
