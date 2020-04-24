import React from 'react';
import { DependencyListItem } from '../DependencyListItem';
import { Dependency } from '../../models';

interface DependencyListProps {
  dependencies?: Dependency[];
}

export function DependencyList({ dependencies = [] }: DependencyListProps) {
  const list = dependencies.map(({ name, currentVersion, latestVersion }) => (
    <DependencyListItem
      key={name}
      name={name}
      currentVersion={currentVersion}
      latestVersion={latestVersion}
    />
  ));
  return <ul>{list}</ul>;
}
