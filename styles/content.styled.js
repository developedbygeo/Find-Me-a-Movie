import styled from 'styled-components';
import { StyledLanding } from './landing.styled';

import { flexMixin } from '@/shared/mixins';
import { lightNeumorph } from '@/shared/neumorphic';
import devices from '@/shared/breakpoints';

export const StyledPage = styled(StyledLanding)`
  grid-template-rows: 0.2fr 0.5fr;
  align-items: flex-start;

  .recommended {
    ${lightNeumorph};

    h1 {
      font-size: 2.5rem;
      font-weight: 300;
    }
  }
  h3 {
    padding-block: 1rem;
  }

  &.search {
    grid-template-rows: auto;
  }

  /* TODO pass the same classNames to movie details */

  @media ${devices.laptop} {
    &.tv-details,
    &.movie-details {
      grid-template-columns: auto;
      margin: initial;
      width: 85%;
      padding: 2.5% 0 2.5% 0;
      margin-right: 15%;

      .detail-image {
        grid-area: 1/1/1/2;
        width: 70%;
        min-height: 50vh;
        min-width: 25vw;
        align-self: flex-start;
      }

      .detail-description {
        width: auto;
        grid-area: 1/2/1/3;
        align-self: center;
        justify-self: flex-start;
      }

      .detail-reviews {
        width: auto;
        grid-area: 2/1/2/3;
      }

      .detail-links {
        width: auto;
        margin: initial;
        height: auto;
        justify-self: flex-start;
        gap: 3rem;

        a {
          box-shadow: none;
        }

        div {
          flex-direction: column;
          gap: 4rem;
        }

        .desktop-link {
          width: 100%;
          ${flexMixin('flex-start', 'center', 'row')};
          gap: 1.5rem;
        }
      }

      .detail-video {
        grid-area: 3/2/3/3;
        width: 100%;
        border-radius: 3rem;
      }

      .detail-seasons {
        grid-area: 4/1/4/3;
        width: 85vw;

        & > .slider-wrapper {
          width: 85vw;
          height: 50vh;
        }

        & > div:not(.slider-wrapper) {
          width: 35%;
        }
      }
      .recommended {
        grid-area: 5/1/5/3;
        ul {
          grid-template-columns: repeat(5, 1fr);
          height: auto;
          min-height: initial;
        }
      }
    }
  }
`;

export const StyledLoading = styled.section`
  height: 90vh;
  width: 80%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};
`;
