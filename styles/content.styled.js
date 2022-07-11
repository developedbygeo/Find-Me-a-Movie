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

  @media ${devices.laptop} {
    &.tv-details,
    &.movie-details {
      grid-template-columns: 0.5fr 1fr;
      margin: initial;
      width: 75%;
      margin-inline: 17%;
      padding: 2.5% 0 2.5% 0;

      .detail-image {
        grid-area: 1/1/1/2;
        width: 85%;
        min-height: 45vh;
        min-width: 15vw;
        align-self: flex-start;
      }

      .detail-description {
        width: auto;
        max-width: 100%;
        grid-area: 1/2/1/3;
        align-self: center;
        justify-self: flex-start;
        padding-right: 7.5%;
      }

      .detail-reviews {
        width: 100%;
        grid-area: 2/1/2/3;
        align-self: flex-start;
        margin: 0;

        button {
          align-self: center;
        }
      }

      .detail-movie-extra {
        justify-content: space-evenly;
        align-self: flex-start;
        padding: 2rem 4.25rem;
        width: max-content;
        margin: 0;
        gap: 2.5rem;
        min-height: 30vh;
        ul {
          flex-direction: column;
          gap: 2.5rem;
          width: auto;
        }
      }

      .detail-links {
        width: 85%;
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
        max-width: 50vw;
        border-radius: 3rem;
        align-self: center;
      }

      .detail-seasons,
      .detail-similar {
        grid-area: 4/1/4/3;
        width: 100%;

        & > .slider-wrapper {
          width: 100%;
          height: 40vh;
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
    &.coming-soon {
      width: 75%;
      ${flexMixin('center', 'center', 'column')};
      gap: 15rem;
    }
  }
`;

export const StyledLoading = styled.section`
  height: 90vh;
  width: 80%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};
`;
