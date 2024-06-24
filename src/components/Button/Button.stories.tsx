import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  onClick: () => alert('Button clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  onClick: () => {},
  disabled: true,
};
