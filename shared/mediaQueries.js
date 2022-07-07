import { css } from 'styled-components';

import devices from './breakpoints';

export const widthMQ = css`
  @media ${devices.tablet} {
    width: 85%;
    margin-inline: auto;
  }
`;
