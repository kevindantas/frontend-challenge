import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;


export const SvgSpinner = styled.svg`
  animation: ${rotate} 2s linear infinite;
  width: 24px;
  height: 24px;
  stroke: white;

  & circle {
    stroke: hsl(210, 70, 75);
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

