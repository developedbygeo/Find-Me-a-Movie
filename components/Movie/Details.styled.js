import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { headingL } from '@/shared/typography';

export const StyledDetails = styled.div`
  width: 100%;
  height: 30%;
  padding: 5% 10%;
  ${flexMixin('space-around', 'flex-start', 'column')};

  & > .details {
    ${flexMixin('flex-start', 'center', 'row')};

    p {
      font-size: 2rem;
      ${flexMixin('flex-start', 'center', 'row')}
      gap: 1rem;
    }
    .icon {
      ${flexMixin('center', 'center', 'row')};
      gap: 1rem;
    }

    span {
      color: rgb(${({ theme }) => theme.colors.white});
      font-weight: ${({ theme }) => theme.typography.weights.light};
    }
  }

  &.title {
    ${headingL};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
