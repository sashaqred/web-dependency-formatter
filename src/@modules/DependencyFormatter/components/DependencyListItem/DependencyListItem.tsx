import React, { useMemo } from 'react';
import { formatVersionByExample } from '../../utils';

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

  const latest = latestVersion ? <>/ {latestVersion}</> : null;
  const range = latestRange ? <>({latestRange})</> : null;
  return (
    <li>
      <span>
        {name}: {currentVersion} {latest} {range}
      </span>
    </li>
  );
}
