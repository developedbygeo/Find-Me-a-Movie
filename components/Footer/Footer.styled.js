import styled from 'styled-components';

import { flexMixin, customGradient } from '@/shared/mixins';
import { descriptionStyle } from '@/shared/typography';
import { interactLink } from '@/shared/interactions';

export const StyledFooter = styled.footer`
  ${flexMixin('center', 'center', 'row')};
  gap: 1rem;
  height: 6vh;
  width: 100%;
  ${customGradient};

  .powered {
    ${flexMixin('center', 'center', 'row')};
    gap: 0.5rem;
  }

  p {
    ${descriptionStyle};
  }

  svg {
    font-size: 1.9rem;
    color: #ff4033;
  }

  span {
    position: relative;
    color: rgba(${({ theme }) => theme.colors.textHighlight}, 0.75);
    &::before {
      transition: all 400ms linear;
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 0.15rem;
    }

    @media (hover: hover) {
      transition: all 150ms ease-in;
      &:hover {
        color: rgb(${({ theme }) => theme.colors.secondaryHighlight});
        &::before {
          width: 100%;
          background: rgb(${({ theme }) => theme.colors.secondaryHighlight});
        }
      }
    }
  }
`;
