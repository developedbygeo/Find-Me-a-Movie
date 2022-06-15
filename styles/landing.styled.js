import styled from 'styled-components';

import { ArticleCont } from '@/UI/Container.styled';
import { flexMixin, gridMixin } from '@/shared/mixins';

export const StyledLanding = styled.section`
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: auto;
  ${gridMixin('1fr', 'auto')}
  gap: 3rem;
`;

export const StyledTrending = styled(ArticleCont)`
  height: 45vh;
  margin-top: 3rem;
  ${flexMixin('space-around', 'flex-start', 'column')};

  h1 {
    padding: 5% 0 0 5%;
  }
`;

export const StyledRecommended = styled(ArticleCont)`
  height: auto;
  width: 90%;
  margin-block: 3rem;
  ${flexMixin('space-between', 'flex-start', 'column')};
  gap: 2rem;

  h1 {
    padding-block: 2.5%;
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
