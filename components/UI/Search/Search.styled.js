import styled, { css } from 'styled-components';

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

  button {
    padding: 0.75rem;
    width: auto;
    height: auto;
    svg {
      font-size: 2.5rem;
    }
  }

  input {
    width: 100%;
  }

  form {
    ${widthMQ};
  }

  @media ${devices.laptop} {
    padding-block: 2%;
    width: 45%;

    input::placeholder {
      text-align: center;
    }

    ${({ IsWide }) =>
      !IsWide
        ? css`
            width: 25%;
            & > form {
              width: 80%;
            }
          `
        : css`
            width: 35%;
          `};
  }
`;

export const StyledInput = styled.input`
  ${InputStyle};
  padding: 1.25rem 2rem;

  &::placeholder {
    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
  }
  @media (hover: hover) {
    &:hover {
      background: rgb(${({ theme }) => theme.colors.primary});
    }
  }

  &:focus {
    ${({ hasError }) =>
      hasError &&
      css`
        box-shadow: 0 0 0 0 rgb(${({ theme }) => theme.colors.accent}) inset,
          rgb(${({ theme }) => theme.colors.accent}) 0 0 0 0.4rem;

        &::placeholder {
          color: rgba(${({ theme }) => theme.colors.white}, 0.8);
        }
      `};
  }
`;
