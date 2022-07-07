import styled from 'styled-components';

import { flexMixin, gridMixin } from '@/shared/mixins';
import { lightNeumorph } from '@/shared/neumorphic';
import { widthMQ } from '@/shared/mediaQueries';

export const StyledDetails = styled.article`
  width: 90%;
  margin-inline: auto;
  ${lightNeumorph};
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 2.5rem;
  & > h2 {
    font-size: 2.5rem;
  }

  h3,
  p {
    color: rgba(${({ theme }) => theme.colors.white}, 0.8);
  }

  h3 {
    text-align: center;
  }

  ${widthMQ};
`;

export const StyledMDetails = styled.ul`
  width: 100%;
  ${flexMixin('space-around', 'center', 'row')};

  li {
    ${gridMixin('auto 1fr', '0.1fr 1fr')};
    column-gap: 1.5rem;
    place-items: center;

    div {
      grid-area: 1/2/3/3;
    }
    svg {
      font-size: 2.5rem;
      grid-area: 1/1/3/2;
      align-self: center;
    }
  }

  .budget {
    color: rgba(${({ theme }) => theme.colors.negativeRed}, 0.8);
  }
  .revenue {
    color: rgba(${({ theme }) => theme.colors.positiveGreen}, 0.8);
  }
`;
