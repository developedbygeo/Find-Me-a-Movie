import styled from 'styled-components';

import { flexMixin, gridMixin } from '@/shared/mixins';
import { interactHoverButton } from '@/shared/interactions';

export const LogoContainer = styled.div`
  position: relative;
  height: 4vh;
  width: 8vw;
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
`;
