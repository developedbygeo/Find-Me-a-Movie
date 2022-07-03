import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
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
    background: transparent;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    color: rgba(${({ theme }) => theme.colors.white}, 0.8);
    ${highlightFocus};
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
