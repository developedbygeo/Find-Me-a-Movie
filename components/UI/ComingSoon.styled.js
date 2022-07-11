import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { descriptionStyle } from '@/shared/typography';
import { buttonLookalike } from './Buttons.styled';

export const StyledSoon = styled.div`
  ${flexMixin('center', 'center', 'column')};
  gap: 2rem;

  h2,
  p {
    ${descriptionStyle};
  }

  h2 {
    letter-spacing: 0.4rem;
    color: rgba(${({ theme }) => theme.colors.white}, 0.765);
  }

  span {
    color: inherit;
    position: relative;
  }

  a {
    ${buttonLookalike};
    padding: 2rem 3rem;
    text-decoration: underline;
  }
`;
