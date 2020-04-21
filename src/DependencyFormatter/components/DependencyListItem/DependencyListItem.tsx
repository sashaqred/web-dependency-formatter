import React from 'react';

interface DependencyListItemProps {
  name: string;
  version: string;
}

export function DependencyListItem({ name, version }: DependencyListItemProps) {
  return <li>{`${name}: ${version}`}</li>;
}
