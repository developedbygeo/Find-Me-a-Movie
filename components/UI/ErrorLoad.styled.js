import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';

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
`;
