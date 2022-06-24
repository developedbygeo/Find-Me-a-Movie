import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { lightNeumorph } from '@/shared/neumorphic';
import { customScrollbar } from '@/shared/mixins';

export const ReviewsContainer = styled.ul`
  width: 90%;
  margin-inline: auto;
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 3rem;
  ${lightNeumorph}
`;

export const StyledReview = styled.li`
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 2rem;
  overflow-y: auto;

  h5 {
    color: rgba(${({ theme }) => theme.colors.white}, 0.8);
    font-weight: 400;
  }

  span {
    margin-left: 0.5rem;
    color: rgb(${({ theme }) => theme.colors.secondary});
    font-weight: 500;
  }

  p {
    padding: 1rem;
    max-height: 40rem;
    overflow-y: auto;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.8;
    letter-spacing: 0.175rem;
    ${customScrollbar};
  }
`;
