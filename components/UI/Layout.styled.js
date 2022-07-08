import styled from 'styled-components';

import { gridMixin } from '@/shared/mixins';
import devices from '@/shared/breakpoints';

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media ${devices.laptop} {
    header {
      position: fixed;
      z-index: 20;
      top: 0;
      left: 0;
      padding: 2.5% 0 2.5% 0;
      width: 10vw;
      height: 100vh;

      grid-template-rows: auto 1fr 0.15fr;
      grid-template-columns: 1fr;
      gap: 5rem;

      nav {
        flex-direction: column;
        height: 100%;
      }
    }

    main {
      margin-left: 12.5vw;
    }
  }
`;
