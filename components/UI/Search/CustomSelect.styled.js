import styled from 'styled-components';

import { InputStyle } from '@/shared/mixins';

export const StyledSelect = styled.div`
  select,
  option {
    ${InputStyle};
  }
`;
