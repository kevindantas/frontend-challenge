import { rgba } from 'polished';
import styled from 'styled-components';

export const Select = styled.select`
  padding: 24px 12px 16px;
  border: 1px solid #0e680e;
  width: 100%;
  border-radius: 5px;
  outline: none;
  transition: box-shadow 0.2s ease-out;

  &:focus {
    box-shadow: 0 0 0 3px ${rgba('#0e680e', 0.3)};
  }
`;
