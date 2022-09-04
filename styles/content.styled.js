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

  &.movies-og,
  &.tv-og,
  &.search-og {
    grid-template-rows: auto;
  }

  @media ${devices.laptop}, ${devices.landscapeMobileSS} {
    &.tv-details,
    &.season-details,
    &.movie-details,
    &.movies-og,
    &.tv-og,
    &.search-og,
    &.person-details {
      grid-template-columns: 0.3fr 1fr;
      margin: initial;
      width: 75%;
      margin-inline: 17%;
      padding: 2.5% 0 2.5% 0;

      .detail-image,
      .season-details-img-cont {
        grid-area: 1/1/1/2;
        width: 70%;
        min-height: 45vh;
        min-width: 15vw;
        align-self: flex-start;
      }

      &.season-details {
        row-gap: 6.5rem;
      }

      .season-details-img-cont {
        margin-top: 10vh;
        min-height: 35vh;
        height: 35vh;
      }

      .season-details-binge {
        width: initial;
        margin: initial;
        align-self: flex-start;
      }

      .season-details-stats {
        height: 100%;
        justify-content: space-between;
      }

      .detail-description,
      .season-details-desc {
        width: auto;
        max-width: 100%;
        grid-area: 1/2/1/3;
        align-self: center;
        justify-self: flex-start;
        padding-right: 7.5%;
      }

      .season-details-desc {
        margin-top: 0;
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
        min-height: 25vh;
        ul {
          flex-direction: column;
          gap: 3rem;
          width: auto;
        }
      }

      .detail-links {
        width: auto;
        height: auto;
        margin: initial;
        padding-inline: 2rem;
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
        justify-self: flex-end;
        margin-inline: initial;
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
        min-height: 50vh;
        ul {
          grid-template-columns: repeat(5, 1fr);
          height: auto;
          min-height: 70vh;
        }
        li {
          height: 100%;
          min-height: 30vh;
          width: 85%;
          margin: auto;
        }
      }
    }

    &.person-details {
      grid-template-columns: 0.2fr 1fr;
      grid-template-rows: auto;
      place-items: center;

      .people-links {
        align-self: flex-start;
      }
    }

    &.movies-og,
    &.tv-og,
    &.search-og {
      grid-template-columns: 1fr;
      height: auto;
      grid-template-rows: 1fr;
    }

    &.movies-og {
      padding: 2.5% 0 5% 0;
    }

    &.search-og {
      padding: 0 0 2.5% 0;
    }

    &.coming-soon {
      width: 75%;
      ${flexMixin('center', 'center', 'column')};
      gap: 15rem;
    }

    .tv-list-cont,
    .movies-list-cont,
    .search-list-cont {
      margin-block: 0;
      ul {
        grid-template-columns: repeat(5, 1fr);
      }
      li {
        width: 95%;
        margin: auto;
      }
    }
  }

  @media ${devices.landscapeMobileSS} {
    &.tv-details {
      .recommended ul {
        grid-template-columns: repeat(3, 1fr);
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
