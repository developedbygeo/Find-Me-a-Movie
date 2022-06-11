import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';

export const LogoContainer = styled.div`
  position: relative;
  height: 6vh;
  width: 10vw;
`;

export const StyledHeader = styled.header`
  height: 10vh;
  width: 100vw;
  background: rgb(${({ theme }) => theme.colors.primary});
  ${flexMixin('space-between', 'center', 'row')};
  padding-inline: 5%;
`;
