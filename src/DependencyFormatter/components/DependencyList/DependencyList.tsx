import React from 'react';
import { DependencyListItem } from '../DependencyListItem';

interface DependencyListProps {
  dependencies?: Record<string, string>;
}

export function DependencyList({ dependencies }: DependencyListProps) {
  const list = Object.entries(dependencies || {}).map(([name, version]) => (
    <DependencyListItem key={name} name={name} version={version} />
  ));
  return <ul>{list}</ul>;
}
