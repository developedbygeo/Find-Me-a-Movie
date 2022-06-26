import styled from 'styled-components';

import { resetDefaults } from '@/shared/mixins';
import { highlightFocus } from '@/shared/interactions';

export const UnstyledButton = styled.button`
  ${resetDefaults};
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  ${highlightFocus};

  &:focus {
    border-radius: 50%;
  }
`;
