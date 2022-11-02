import { rgba } from 'polished';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  margin: 16px 0;
`;

export const InputLabel = styled.label`
  padding-bottom: 8px;
  display: inline-block;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 4px;
  display: inline-block;
`;