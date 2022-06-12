import { css } from 'styled-components';

export const showActiveLink = css`
  position: relative;
  color: rgb(${({ theme }) => theme.colors.white});

  &::before {
    position: absolute;
    content: '';
    z-index: 2;
    width: 100%;
    height: 0.25rem;
    bottom: -0.2rem;
    background: rgb(${({ theme }) => theme.colors.white});
  }
`;

export const interactLink = css`
  @media (hover: hover) {
    color: rgb(${({ theme }) => theme.colors.linkHighlight});
    position: relative;

    &::after {
      width: 100%;
      left: 0%;
    }
  }
`;
