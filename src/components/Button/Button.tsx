import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${(props: { disabled: any; }) => (props.disabled ? 'grey' : 'blue')};
  color: white;
  cursor: ${(props: { disabled: any; }) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {text}
  </StyledButton>
);

export default Button;
