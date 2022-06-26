import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';

export const StyledControls = styled.div`
  width: 80%;
  height: auto;
  margin-inline: auto;
  ${flexMixin('space-between', 'center', 'row')};

  & > button {
    color: rgb(${({ theme }) => theme.colors.white});
    width: 5.5rem;
    height: 5.5rem;
    font-size: 5rem;
    ${flexMixin('center', 'center', 'column')};
  }

  button {
    padding: 0.5rem;
  }
`;

export const StyledDots = styled.div`
  ${flexMixin('center', 'center', 'row')};
  gap: 1.25rem;

  & > button {
    color: rgb(${({ theme }) => theme.colors.secondary});
    width: 3rem;
    height: 3rem;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
