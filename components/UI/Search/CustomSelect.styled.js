import styled from 'styled-components';

import { InputStyle } from '@/shared/mixins';

export const StyledSelect = styled.div`
  position: relative;
  font-family: 'Montserrat', sans-serif;

  select,
  option {
    ${InputStyle};
  }
`;
