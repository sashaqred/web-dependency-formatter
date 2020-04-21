import React from 'react';

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
  const latest = latestVersion ? <>/ {latestVersion}</> : null;
  return (
    <li>
      <span>
        {name}: {currentVersion} {latest}
      </span>
    </li>
  );
}
