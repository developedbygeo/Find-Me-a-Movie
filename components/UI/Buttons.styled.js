import styled, { css } from 'styled-components';

import devices from '@/shared/breakpoints';
import { resetDefaults } from '@/shared/mixins';
import { highlightFocus, interactiveButton } from '@/shared/interactions';
import { lightNeumorph, tagNeumorph, buttonNeumorph } from '@/shared/neumorphic';
import { flexMixin } from '@/shared/mixins';
import { showText, hideText } from '@/shared/animation';
import { descriptionStyle } from '@/shared/typography';

export const UnstyledButton = styled.button`
  ${resetDefaults};
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  color: rgb(${({ theme }) => theme.colors.textHighlight});
  ${highlightFocus};

  &:focus {
    border-radius: 50%;
  }
`;

export const StyledBackButtonCont = styled.div`
  ${flexMixin('flex-start', 'center', 'row')};
  gap: 2rem;
  width: 50%;
  width: auto;
  padding: 1rem;
  overflow: hidden;
  @media ${devices.laptop} {
    position: absolute;
    top: 5%;
    left: 16.5%;

    .back-text {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(${({ theme }) => theme.colors.background}, 1);
      }
    }

    p {
      ${descriptionStyle};
    }
  }
`;

export const StyledBackButton = styled(UnstyledButton)`
  color: rgb(${({ theme }) => theme.colors.textHighlight});
  ${lightNeumorph};
  ${flexMixin('center', 'center', 'column')};
  padding: 0;
  border-radius: 50%;
  margin: 2.5vh 0 0 2.5%;
  transition: all 150ms ease-in;

  svg {
    font-size: 3rem;
    pointer-events: none;
  }

  .back-text {
    display: none;
    position: absolute;
    bottom: -50%;
  }

  @media (hover: hover) {
    &:hover {
      color: rgb(${({ theme }) => theme.colors.accent});
      & ~ .back-text::after {
        animation: ${showText} 0.65s ease-in-out;
        width: 0%;
      }
    }
    &:not(:hover) {
      & ~ .back-text::after {
        animation: ${hideText} 0.65s ease-in-out;
        width: 100%;
      }
    }
  }

  @media ${devices.laptop} {
    margin: 0;
  }
`;

export const ReviewButton = styled(StyledBackButton)`
  width: 20rem;
  height: 10rem;
  margin: inherit;
  border-radius: 1.25rem;
  ${tagNeumorph}
  ${interactiveButton};

  &:focus {
    border-radius: 1.5rem;
  }
`;

export const buttonLookalike = css`
  padding: 1.75rem 2.5rem;
  ${buttonNeumorph};
`;
