import React, { useMemo } from 'react';
import { formatVersionByExample } from '../../utils';
import { LatestVersionStyled } from './styled';

interface DependencyListItemProps {
  name: string;
  currentVersion: string;
  latestVersion?: string;
}

export function DependencyListItem({
  name,
  currentVersion,
  latestVersion,
}: DependencyListItemProps) {
  const latestRange = useMemo(() => {
    let nextRange: string | undefined;
    if (latestVersion) {
      nextRange = formatVersionByExample(latestVersion, currentVersion);
    }
    return nextRange;
  }, [latestVersion, currentVersion]);
  const isVersionsDifferent = useMemo(() => currentVersion !== latestRange, [
    currentVersion,
    latestRange,
  ]);

  const latest = latestVersion ? (
    <>
      / <LatestVersionStyled isDifferent={isVersionsDifferent}>{latestVersion}</LatestVersionStyled>
    </>
  ) : null;
  const range = latestRange && isVersionsDifferent ? <>({latestRange})</> : null;
  return (
    <li>
      <span>
        {name}: {currentVersion} {latest} {range}
      </span>
    </li>
  );
}
