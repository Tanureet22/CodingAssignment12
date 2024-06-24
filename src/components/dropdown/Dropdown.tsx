import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

const StyledSelect = styled.select<{ disabled: boolean }>`
  background-color: ${props => (props.disabled ? 'grey' : 'white')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, disabled = false }) => (
  <StyledSelect onChange={(e) => onChange(e.target.value)} disabled={disabled}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
