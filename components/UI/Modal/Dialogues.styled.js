import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { descriptionStyle } from '@/shared/typography';
import { interactHoverButton } from '@/shared/interactions';

export const StyledSoon = styled.section`
  position: relative;
  width: 100%;
  height: 30vh;
  ${flexMixin('center', 'center', 'column')};
  gap: 2rem;

  div {
    ${flexMixin('center', 'center', 'column')};
    gap: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 2rem;
    ${descriptionStyle};
  }

  button {
    position: absolute;
    border-radius: 50%;
    top: 2%;
    right: 2%;
    ${interactHoverButton};

    svg {
      font-size: 2.5rem;
      pointer-events: none;
    }
  }
`;
