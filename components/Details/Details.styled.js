import styled from 'styled-components';

import { flexMixin, gridMixin, ratingColor } from '@/shared/mixins';
import { lightNeumorph, tagNeumorph } from '@/shared/neumorphic';
import { descriptionStyle } from '@/shared/typography';
import { widthMQ } from '@/shared/mediaQueries';

export const SimpleDescription = styled.article`
  width: 90%;
  margin-inline: auto;
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 2.5rem;
  margin-top: 2.5vh;

  & > article {
    display: block;
  }
`;

export const StyledDescription = styled.article`
  width: 90%;
  height: auto;
  margin-inline: auto;
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 3rem;
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 200;
    color: rgba(${({ theme }) => theme.colors.white}, 0.7);
  }

  /* genres UL */
  ul {
    width: 100%;
    ${flexMixin('flex-start', 'center', 'row')};
    gap: 3rem;
  }
  li {
    font-weight: ${({ theme }) => theme.typography.weights.superLight};
    color: rgba(${({ theme }) => theme.colors.white}, 0.75);
    letter-spacing: 0.175rem;
    ${tagNeumorph};
  }

  ${widthMQ};
`;

export const StyledText = styled.article`
  p {
    ${descriptionStyle};
  }
`;

export const StyledImageCont = styled.div`
  position: relative;
  height: 30vh;
  width: 100%;
`;

export const StyledRating = styled.article`
  ${ratingColor};

  p {
    color: rgba(${({ theme }) => theme.colors.white}, 0.75);
  }
  p,
  span {
    font-size: 2rem;
  }
`;

export const StyledTitleCont = styled.article`
  ${gridMixin('1fr 0.2fr', 'repeat(2, 1fr)')};
  width: 100%;
  gap: 1.5rem;

  h2 {
    grid-area: 2/1/2/2;
  }
  article {
    ${flexMixin('center', 'center', 'row')};
    height: 100%;
    grid-area: 1/2/3/3;
  }

  .runtime {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: rgba(${({ theme }) => theme.colors.white}, 0.65);

    span {
      color: rgb(${({ theme }) => theme.colors.textHighlight});
    }
  }
`;
