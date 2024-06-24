import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;

const Template: StoryObj<DropdownProps> = {
  render: (args) => <Dropdown {...args} />,
};

export const Default: StoryObj<DropdownProps> = {
  ...Template,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    onChange:(value) => alert(`Selected: ${value}`),
  },
};

export const Disabled: StoryObj<DropdownProps> = {
  ...Template,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    onChange: (value) => alert(`Selected: ${value}`),
    disabled: true,
  },
};
