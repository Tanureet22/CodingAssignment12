import React from 'react';
import styled from 'styled-components';

export type LabelProps = {
  text: string;
  disabled?: boolean;
};

const StyledLabel = styled.span<{ disabled: boolean }>`
  color: ${props => (props.disabled ? 'grey' : 'black')};
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false }) => (
  <StyledLabel disabled={disabled}>{text}</StyledLabel>
);

export default Label;
