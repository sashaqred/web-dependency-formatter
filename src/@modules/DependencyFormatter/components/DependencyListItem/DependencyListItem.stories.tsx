import React from 'react';
import { text } from '@storybook/addon-knobs';
import { DependencyListItem } from './DependencyListItem';

export default {
  title: 'DependencyFormatter/components/DependencyListItem',
  component: DependencyListItem,
};

export function withKnobs() {
  return (
    <ul>
      <DependencyListItem
        name={text('Name', 'withKnobs')}
        currentVersion={text('currentVersion', '1.0.0')}
        latestVersion={text('latestVersion', '')}
      />
    </ul>
  );
}

export function withEmptyLatestVersion() {
  return (
    <ul>
      <DependencyListItem name="withSampleParams" currentVersion="1.0.0" />;
    </ul>
  );
}

export function withMatchedLatestVersion() {
  return (
    <ul>
      <DependencyListItem
        name="withMatchedLatestVersion"
        currentVersion="1.0.0"
        latestVersion="1.0.0"
      />
    </ul>
  );
}

export function withoutMatchedLatestVersion() {
  return (
    <ul>
      <DependencyListItem
        name="withMatchedLatestVersion"
        currentVersion="1.0.0"
        latestVersion="2.0.0"
      />
    </ul>
  );
}
