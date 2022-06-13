import { css } from 'styled-components';

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
