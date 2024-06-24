import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'Card description goes here.',
  imageUrl: 'https://via.placeholder.com/300x200',
};
