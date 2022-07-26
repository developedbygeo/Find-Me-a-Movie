import styled, { css } from 'styled-components';

import { gridMixin } from '@/shared/mixins';
import { previewElevation } from '@/shared/shadows';

export const StyledList = styled.ul`
  ${gridMixin('repeat(2, 1fr)', 'auto')};
  gap: 4rem;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  height: auto;

  li {
    ${previewElevation};
  }

  div {
    height: 30vh;
    width: 100%;
    margin: auto;
  }

  .trending-details {
    height: 50%;
  }

  ${({ searchStyling }) =>
    searchStyling &&
    css`
      min-height: initial;
    `}
`;

// for semantic purposes - to manipulate the tag
export const StyledTitle = styled.h1`
  font-weight: 400;
  font-family: 'Outfit', sans-serif;
`;
