import styled from 'styled-components';

import { widthMQ } from '@/shared/mediaQueries';

export const StyledVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: 90%;
  margin-inline: auto;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  ${widthMQ};
`;
