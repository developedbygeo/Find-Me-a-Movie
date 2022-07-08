import styled from 'styled-components';

import devices from '@/shared/breakpoints';
import { flexMixin, InputStyle } from '@/shared/mixins';
import { widthMQ } from '@/shared/mediaQueries';

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
    gap: 1rem;
  }

  input {
    ${InputStyle};
    padding: 1.25rem 2rem;
    &::placeholder {
      font-size: 1.7rem;
    }
    @media (hover: hover) {
      &:hover {
        background: rgb(${({ theme }) => theme.colors.primary});
      }
    }
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

  form {
    ${widthMQ};
  }

  @media ${devices.laptop} {
    padding-block: 2%;
    width: 45%;
  }
`;
