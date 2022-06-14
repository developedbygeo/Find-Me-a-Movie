import styled from 'styled-components';

import { ArticleCont } from '@/UI/Container.styled';
import { flexMixin, gridMixin } from '@/shared/mixins';

export const StyledLanding = styled.section`
  height: 100%;
  width: 90%;
  margin: auto;
  /* TODO update this after the next component's ready */
  ${gridMixin('1fr', '0.6fr 1fr')}
`;

export const StyledTrending = styled(ArticleCont)`
  height: 45vh;
  ${flexMixin('space-around', 'flex-start', 'column')};
`;

export const StyledRecommended = styled(ArticleCont)`
  height: 60vh;
  ${flexMixin('space-between', 'flex-start', 'column')};
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
