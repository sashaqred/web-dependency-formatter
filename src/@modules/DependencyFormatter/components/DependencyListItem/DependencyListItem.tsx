import React from 'react';

interface DependencyListItemProps {
  name: string;
  currentVersion: string;
}

export function DependencyListItem({ name, currentVersion }: DependencyListItemProps) {
  return <li>{`${name}: ${currentVersion}`}</li>;
}
