import { rgba } from 'polished';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputLabel = styled.label`
  /* position: absolute;
  top: 16px;
  left: 12px;
  transform-origin: top left;
  transition: 0.2s ease-in; */
  padding-bottom: 8px;
  display: inline-block;
`;

export const Input = styled.input`
  padding: 24px 12px 16px;
  border: 1px solid #0e680e;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 12px;
  outline: none;
  transition: box-shadow 0.2s ease-out;

  &:focus {
    box-shadow: 0 0 0 3px ${rgba('#0e680e', 0.3)};
  }

  &:focus + ${InputLabel} {
    transform: scale(0.8) translateY(-8px);
  }
`;
