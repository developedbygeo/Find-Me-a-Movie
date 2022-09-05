import styled, { css } from 'styled-components';

import devices from '@/shared/breakpoints';
import { resetDefaults } from '@/shared/mixins';
import { highlightFocus, interactiveButton } from '@/shared/interactions';
import { lightNeumorph, tagNeumorph, buttonNeumorph } from '@/shared/neumorphic';
import { flexMixin } from '@/shared/mixins';
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
  margin-block: 2.5vh;
  width: auto;
  padding: 1rem;
  overflow: hidden;
  cursor: pointer;
  @media ${devices.laptop} {
    position: absolute;
    top: 2.5%;
    left: 16.5%;
    p {
      ${descriptionStyle};
      transition: all 100ms ease-in;
    }
  }
  @media (hover: hover) {
    &:hover {
      button {
        color: rgb(${({ theme }) => theme.colors.accent});
      }
      p {
        color: rgb(${({ theme }) => theme.colors.white});
      }
    }
  }

  @media ${devices.landscapeMobileSS} {
    padding-inline: 11%;
  }
`;

export const StyledBackButton = styled(UnstyledButton)`
  color: rgb(${({ theme }) => theme.colors.textHighlight});
  ${lightNeumorph};
  ${flexMixin('center', 'center', 'column')};
  padding: 0;
  border-radius: 50%;
  transition: all 150ms ease-in;

  svg {
    font-size: 3rem;
    pointer-events: none;
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
