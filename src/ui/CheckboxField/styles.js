import { rgba } from 'polished';
import styled from 'styled-components';

export const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #0e680e;
  border-radius: 5px;
  appearance: none;
  transition: box-shadow 0.2s ease-out;

  &:before {
    content: '✓';
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    text-align: center;
    display: block;
    color: #0f670f;
    transform: scale(0);
    transition: transform 0.2s ease-in;
  }

  &:checked:before {
    transform: scale(1);
  }

  &:focus {
    box-shadow: 0 0 0 3px ${rgba('#0e680e', 0.3)};
  }
`;

export const CheckboxLabel = styled.label`
  display: block;
`;
