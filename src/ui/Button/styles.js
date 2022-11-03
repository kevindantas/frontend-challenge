import styled, { css } from 'styled-components';

function getVariantStyle({ variant }) {
  switch (variant) {
    case 'ghost':
      return css`
        background: #fff;
        color: #0e680e;
      `;
    case 'primary':
    default:
      return css`
        background: #0e680e;
        color: #fff;
      `;
  }
}

export const BaseButton = styled.button`
  padding: 16px 24px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;

  ${getVariantStyle}

  i {
    margin-left: 12px;
  }
`;
