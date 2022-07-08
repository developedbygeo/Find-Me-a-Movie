import styled from 'styled-components';

import { gridMixin } from '@/shared/mixins';
import { interactHoverButton } from '@/shared/interactions';
import devices from '@/shared/breakpoints';

export const LogoContainer = styled.div`
  position: relative;
  height: auto;
  width: 5rem;
`;

export const StyledHeader = styled.header`
  height: 10vh;
  width: 100vw;
  background: rgb(${({ theme }) => theme.colors.primary});
  ${gridMixin('auto 1fr 0.15fr', '1fr')};
  place-items: center;
  padding-inline: 5%;

  /* profile button */
  & > button {
    padding: 0;
    ${interactHoverButton}
  }

  @media ${devices.tablet} {
    padding-inline: 7.5%;
  }
`;
