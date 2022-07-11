import styled, { css } from 'styled-components';

import { resetDefaults } from '@/shared/mixins';
import { highlightFocus, interactiveButton } from '@/shared/interactions';
import { lightNeumorph, tagNeumorph, buttonNeumorph } from '@/shared/neumorphic';
import { flexMixin } from '@/shared/mixins';

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

export const StyledBackButton = styled(UnstyledButton)`
  color: rgb(${({ theme }) => theme.colors.textHighlight});
  ${lightNeumorph};
  ${flexMixin('center', 'center', 'column')};
  padding: 0;
  border-radius: 50%;
  margin: 2.5vh 0 0 2.5%;

  svg {
    font-size: 3rem;
    pointer-events: none;
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
