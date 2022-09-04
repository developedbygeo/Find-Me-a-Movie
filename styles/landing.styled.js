import styled from 'styled-components';

import { ArticleCont } from '@/UI/Container.styled';
import { flexMixin, gridMixin } from '@/shared/mixins';
import { widthMQ } from '@/shared/mediaQueries';
import devices from '@/shared/breakpoints';

export const StyledLanding = styled.section`
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: auto;
  ${gridMixin('1fr', 'auto')}
  gap: 3rem;

  @media ${devices.laptop} {
    &.landing {
      width: 75%;
    }
  }
`;

export const StyledTrending = styled(ArticleCont)`
  ${flexMixin('space-around', 'flex-start', 'column')};

  h1 {
    padding: 5% 0 0 5%;
  }

  @media ${devices.tablet} {
    h1 {
      padding: 5% 0 0 7.5%;
    }
  }
  @media ${devices.laptop} {
    h1 {
      padding: 0;
    }
  }

  @media ${devices.landscapeMobileSS} {
    gap: 2rem;
    height: auto;
    width: 85%;
    margin: auto;

    h1 {
      padding: 0;
    }
  }
`;

export const StyledRecommended = styled(ArticleCont)`
  height: auto;
  width: 90%;
  margin-block: 3rem;
  ${flexMixin('space-between', 'flex-start', 'column')};
  gap: 2rem;

  &.cast-list-cont {
    margin-block: 0;
    gap: 0.5rem;
  }

  h1 {
    padding-block: 2.5%;
  }

  @media ${devices.laptop} {
    width: 100%;

    &.landing-recommended {
      ul {
        margin: initial;
        width: 85%;
        grid-template-columns: repeat(5, 1fr);
        gap: 5rem;
        min-height: 70vh;
      }

      li {
        height: 100%;
        width: 90%;
        margin: auto;
      }
    }
  }

  @media ${devices.landscapeMobileSS} {
    width: 85%;
    margin: auto;
    ul {
      grid-template-columns: repeat(5, 1fr);
      min-height: 70vh;
    }
  }
`;

export const GalleryWrapper = styled.article`
  width: 100vw;
  /* TODO adjust this for future mq */
  height: 35vh;
  align-self: center;
  ${flexMixin('center', 'center', 'column')};
  gap: 3rem;
  overflow: hidden;

  ul {
    width: 100vw;
    height: 100%;
    overflow: hidden;
  }
`;
