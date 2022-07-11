import styled, { css } from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { headingM } from '@/shared/typography';

export const StyledDetails = styled.div`
  pointer-events: none;
  width: 100%;
  height: 30%;
  padding: 5% 6%;
  ${flexMixin('space-around', 'flex-start', 'column')};

  ${({ hasNoPlatform }) =>
    hasNoPlatform &&
    css`
      ${flexMixin('space-evenly', 'center', 'row-reverse')};
      .details,
      .title {
        height: auto;
        width: auto;
      }
    `};

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

    .movie {
      text-transform: capitalize;
    }
    .tv {
      text-transform: uppercase;
    }
    .date {
      font-size: 1.8rem;
    }

    span {
      color: rgb(${({ theme }) => theme.colors.white});
      font-weight: ${({ theme }) => theme.typography.weights.light};
    }
  }

  .title h2 {
    ${headingM};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
