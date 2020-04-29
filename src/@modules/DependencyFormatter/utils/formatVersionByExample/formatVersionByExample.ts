import { parse, valid, validRange } from 'semver';

export function formatVersionByExample(
  versionToFormat: string | undefined,
  rangeExample: string,
): string | undefined {
  let formattedRange: string | undefined;
  const isValidVersion = valid(versionToFormat);
  const isValidRange = validRange(rangeExample);
  if (isValidVersion && isValidRange) {
    const versionRegex = /^(\D?)(\d+)?(?:\.(\d+))?(?:\.(\d+))?(\D*)$/;
    const parsedLatest = parse(versionToFormat);
    formattedRange = rangeExample.replace(
      versionRegex,
      (matched, pre, major, minor, patch, post) => {
        const segments = [];
        if (major !== undefined) {
          segments.push(parsedLatest?.major);
        }
        if (minor !== undefined) {
          segments.push(parsedLatest?.minor);
        }
        if (patch !== undefined) {
          segments.push(parsedLatest?.patch);
        }
        return `${pre}${segments.join('.')}${post}`;
      },
    );
  }
  return formattedRange;
}
