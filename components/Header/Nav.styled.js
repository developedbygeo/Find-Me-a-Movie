import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';

export const StyledNav = styled.nav`
  ${flexMixin('center', 'center', 'row')};
  padding-inline: 3rem;
  gap: 1.5rem;
  a {
    color: rgb(${({ theme }) => theme.colors.secondary});
    white-space: nowrap;
  }
`;
