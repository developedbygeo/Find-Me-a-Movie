import { css } from 'styled-components';

export const highlightFocus = css`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0 rgb(${({ theme }) => theme.colors.buttonFocusBg}) inset,
      rgb(${({ theme }) => theme.colors.buttonFocusBg}) 0 0 0 0.4rem;
  }
`;

export const showActiveLink = css`
  position: relative;
  color: rgb(${({ theme }) => theme.colors.white});
`;

export const interactLink = css`
  @media (hover: hover) {
    color: rgb(${({ theme }) => theme.colors.linkHighlight});
    position: relative;

    svg {
      stroke: rgb(${({ theme }) => theme.colors.accent});
    }
  }
`;
