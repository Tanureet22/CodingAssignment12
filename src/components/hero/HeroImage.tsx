import React from 'react';
import styled from 'styled-components';

export type HeroImageProps = {
  src: string;
  alt: string;
};

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => (
  <StyledImage src={src} alt={alt} onError={(e) => (e.currentTarget.src = '/fallback-image.png')} />
);

export default HeroImage;
