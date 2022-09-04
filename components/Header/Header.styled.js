import styled from 'styled-components';

import { gridMixin, customGradient } from '@/shared/mixins';
import { interactHoverButton } from '@/shared/interactions';
import devices from '@/shared/breakpoints';

export const LogoContainer = styled.div`
  position: relative;
  height: auto;
  width: 5rem;

  @media ${devices.landscapeMobileSS} {
    margin-left: 2vw;
  }

  @media ${devices.laptop} {
    margin-left: 0;
  }
`;

export const StyledHeader = styled.header`
  height: 10vh;
  width: 100vw;
  ${gridMixin('auto 1fr 0.15fr', '1fr')};
  place-items: center;
  padding-inline: 5%;
  ${customGradient};

  /* profile button */
  & > button {
    padding: 0;
    ${interactHoverButton}
  }

  @media ${devices.tablet} {
    padding-inline: 7.5%;
  }

  @media ${devices.landscapeMobileSS} {
    padding-inline: 5%;

    /* profile button */
    & > button {
      justify-self: flex-end;
    }

    & > nav {
      justify-content: space-evenly;
      width: 50%;
    }
  }

  @media ${devices.laptop} {
    padding-inline: 0%;
  }
`;
