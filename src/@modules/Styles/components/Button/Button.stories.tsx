import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: 'Styles/components/Button',
  component: Button,
};

const typeLabel = 'Type';
const typeValues: any = ['button', 'submit', 'reset'];

export function withKnobs() {
  return (
    <Button type={select(typeLabel, typeValues, undefined)} onClick={action('onClick')}>
      {text('Text', 'Button')}
    </Button>
  );
}
