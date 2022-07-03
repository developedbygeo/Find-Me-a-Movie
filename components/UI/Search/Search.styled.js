import styled from 'styled-components';

import { flexMixin, InputStyle } from '@/shared/mixins';
import { highlightFocus } from '@/shared/interactions';

export const StyledWrapper = styled.div`
  height: auto;
  padding-block: 5%;
  width: 90%;
  margin-inline: auto;
  ${flexMixin('flex-start', 'center', 'row')};
  gap: 1rem;

  form {
    width: 100%;
    border: 0;
    ${flexMixin('center', 'center', 'row')};
  }

  input {
    ${InputStyle};
  }

  input {
    width: 100%;
  }

  input::placeholder {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    padding: 0.75rem;
    width: auto;
    height: auto;
    svg {
      font-size: 2.5rem;
    }
  }
`;
