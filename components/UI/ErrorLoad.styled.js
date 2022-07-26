import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import devices from '@/shared/breakpoints';

export const StyledErrLoad = styled.section`
  height: 90vh;
  width: 80%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};

  &.err {
    gap: 5rem;

    svg {
      width: 10rem;
      height: 10rem;
      color: rgb(${({ theme }) => theme.colors.accent});
    }

    p {
      font-size: 2rem;
      line-height: 2;
      font-weight: 300;
      letter-spacing: 0.15rem;
      text-align: center;
    }
  }

  &.sub {
    width: 3rem;
    height: 3rem;
  }

  @media ${devices.laptop} {
    margin: initial;
    width: 75% !important;
    margin-inline: 17%;
    padding: 2.5% 0 2.5% 0;
  }
`;
