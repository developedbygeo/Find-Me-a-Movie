import styled from 'styled-components';

import { resetDefaults } from '@/shared/mixins';
import { highlightFocus } from '@/shared/interactions';
import { lightNeumorph } from '@/shared/neumorphic';
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
