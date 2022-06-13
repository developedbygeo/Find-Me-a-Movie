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
  height: 35vh;
  ${flexMixin('space-between', 'flex-start', 'column')};

  div {
    /* display: block; */
    width: 100%;
    height: 30vh;
  }
`;

export const StyledRecommended = styled(ArticleCont)`
  height: 60vh;
  ${flexMixin('space-between', 'flex-start', 'column')};
`;
