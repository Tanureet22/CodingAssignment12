import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroImage, { HeroImageProps } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'src/components/hero/freddy-g-CNl4VKGRR_E-unsplash.jpg',
  alt: 'Hero Image',
};

export const WithError = Template.bind({});
WithError.args = {
  src: 'invalid-url',
  alt: 'Fallback Image',
};
