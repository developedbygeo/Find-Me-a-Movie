import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { descriptionStyle } from '@/shared/typography';
import { lightNeumorph } from '@/shared/neumorphic';

export const StyledBinge = styled.article`
  width: 90%;
  margin-inline: auto;
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 2rem;
  align-self: center;
  ${lightNeumorph};

  & > p {
    ${descriptionStyle};
  }
`;

export const HeaderCont = styled.div`
  ${flexMixin('flex-start', 'center', 'row')};
  gap: 2rem;

  svg {
    font-size: 3rem;
  }
`;

export const CalculatorCont = styled.ul`
  width: 100%;
  ${flexMixin('flex-start', 'flex-start', 'column')};
  gap: 2rem;

  li {
    ${flexMixin('flex-start', 'center', 'row')};
    gap: 2rem;

    span {
      color: rgb(${({ theme }) => theme.colors.textHighlight});
      font-weight: 600;
    }

    p {
      ${descriptionStyle};
    }
  }

  svg {
    font-size: 2.5rem;
    color: rgb(${({ theme }) => theme.colors.secondary});
  }
`;
