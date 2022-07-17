import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { lightNeumorph } from '@/shared/neumorphic';
import { descriptionStyle } from '@/shared/typography';
import { customScrollbar } from '@/shared/mixins';
import { interactShowReviews } from '@/shared/interactions';

import { ReviewButton } from '@/UI/Buttons.styled';

export const ReviewsContainer = styled.ul`
  width: 90%;
  margin-inline: auto;
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 3rem;
  ${lightNeumorph};
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
    ${descriptionStyle};
    ${customScrollbar};
  }

  button {
    justify-self: center;
  }
`;

export const EnableReviewsButton = styled(ReviewButton)`
  width: auto;
  padding: 0.5rem 3rem;
  ${interactShowReviews};
`;
