import { rgba } from 'polished';
import styled from 'styled-components';

export const BaseCard = styled.div`
  max-width: 480px;
  padding: 32px;
  margin: auto;
  border: 2px solid #0f670f;
  border-radius: 14px;
  box-shadow: 4px 4px 0 4px ${rgba('#0f670f', 0.25)};
`;
