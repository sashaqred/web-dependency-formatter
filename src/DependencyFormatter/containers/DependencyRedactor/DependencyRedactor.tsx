import React from 'react';
import { useSelector } from 'react-redux';
import { selectDependencies } from '../../selectors';
import { DependencyList } from '../../components';

export function DependencyRedactor() {
  const dependencies = useSelector(selectDependencies);

  return <DependencyList dependencies={dependencies} />;
}
