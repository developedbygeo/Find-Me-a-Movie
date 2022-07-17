import styled from 'styled-components';

import { GalleryWrapper } from '@/styles/landing.styled';
import { lightNeumorph } from '@/shared/neumorphic';

export const StyledCastList = styled(GalleryWrapper)`
  overflow: hidden;
  width: 100%;
  height: auto;
  max-width: 60vw;

  li {
    box-shadow: none !important;
  }
`;

export const CastImageCont = styled.div`
  position: relative;
  width: 7rem;
  height: 8rem;

  img {
    border-radius: 50% !important;
    ${lightNeumorph};
  }
`;
