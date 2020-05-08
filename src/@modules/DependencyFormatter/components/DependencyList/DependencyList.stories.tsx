import React from 'react';
import { object } from '@storybook/addon-knobs';
import { DependencyListItem } from '../DependencyListItem';
import { DependencyList } from './DependencyList';
import { Dependency } from '../../models';

export default {
  title: 'DependencyFormatter/components/DependencyList',
  component: DependencyList,
  subcomponents: { DependencyListItem },
};

const dependencies: Dependency[] = [
  { name: 'withoutLatestVersion', currentVersion: '1.0.0' },
  { name: 'withMatchedLatestVersion', currentVersion: '1.0.0', latestVersion: '1.0.0' },
  { name: 'withoutMatchedLatestVersion', currentVersion: '1.0.0', latestVersion: '2.0.0' },
];

export function withKnobs() {
  return <DependencyList dependencies={object('Dependencies', dependencies)} />;
}
