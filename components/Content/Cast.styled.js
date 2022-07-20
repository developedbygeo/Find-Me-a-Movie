import styled from 'styled-components';

import { GalleryWrapper, StyledRecommended } from '@/styles/landing.styled';

import { lightNeumorph } from '@/shared/neumorphic';
import { gridMixin } from '@/shared/mixins';

export const CastWrapper = styled(StyledRecommended)`
  ${gridMixin('1fr', 'auto')};
  width: 95%;
`;

export const StyledCastList = styled(GalleryWrapper)`
  overflow: hidden;
  width: 100%;
  height: auto;

  li {
    box-shadow: none !important;
  }
`;

export const CastImageCont = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;

  img {
    border-radius: 50% !important;
    ${lightNeumorph};
    padding: 0;
  }
`;

export const StyledAnchor = styled.a`
  width: 100%;
  height: 100%;
`;
