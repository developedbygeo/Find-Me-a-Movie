import styled from 'styled-components';

import { GalleryWrapper, StyledRecommended } from '@/styles/landing.styled';

import { lightNeumorph } from '@/shared/neumorphic';
import { gridMixin } from '@/shared/mixins';

export const CastWrapper = styled(StyledRecommended)`
  ${gridMixin('1fr', 'auto')};
  width: 100%;
  position: relative;
`;

export const StyledCastList = styled(GalleryWrapper)`
  width: 95%;
  width: auto;
  height: auto;
  margin-inline: 5%;

  li {
    box-shadow: none !important;
  }

  .cast-list-controls {
    width: 105%;
    height: 100%;
    position: absolute;
    z-index: 10;
    pointer-events: none;
    button {
      pointer-events: auto;
      background: rgba(${({ theme }) => theme.colors.secondary}, 0.025);
      &:focus {
        box-shadow: none;
      }
    }
    .arr-right {
      border-radius: 0% 50% 50% 0%;
    }
    .arr-left {
      border-radius: 50% 0% 0% 50%;
    }
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
