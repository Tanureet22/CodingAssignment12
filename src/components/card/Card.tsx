import React from 'react';
import styled from 'styled-components';

export type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const CardDescription = styled.p`
  color: #555;
`;

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <StyledCard>
    <CardImage src={imageUrl} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </StyledCard>
);

export default Card;
