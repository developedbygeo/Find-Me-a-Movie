import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { showActiveLink, interactLink } from '@/shared/interactions';

// TODO update interactions and styling for svgs

export const StyledNav = styled.nav`
  ${flexMixin('center', 'center', 'row')};
  gap: 1.5rem;

  a {
    position: relative;
    color: rgb(${({ theme }) => theme.colors.secondary});
    white-space: nowrap;
    font-size: 2rem;
    transition: all 100ms ease;
    &::after {
      position: absolute;
      content: '';
      width: 0%;
      height: 0.25rem;
      background-color: rgb(${({ theme }) => theme.colors.accent});
      left: 50%;
      bottom: -0.5rem;
      transition: all 250ms ease;
    }

    &.active {
      ${showActiveLink};
    }
    &:hover:not(.active) {
      ${interactLink};
    }
  }
`;
