import styled from 'styled-components';

import { flexMixin, gridMixin } from '@/shared/mixins';

export const LogoContainer = styled.div`
  position: relative;
  height: 6vh;
  width: 10vw;
`;

export const StyledHeader = styled.header`
  height: 10vh;
  width: 100vw;
  background: rgb(${({ theme }) => theme.colors.primary});
  ${gridMixin('auto 1fr 0.2fr', '1fr')};
  place-items: center;
  padding-inline: 5%;
`;
