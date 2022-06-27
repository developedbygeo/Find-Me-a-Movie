import { css } from 'styled-components';

export const gridMixin = (columns, rows, gap) => css`
  display: grid;
  grid-template-columns: ${columns};
  grid-template-rows: ${rows};
  gap: ${gap};
`;

export const flexMixin = (justify, align, direction) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const maxContainer = css`
  height: 100%;
  width: 100%;
`;

export const resetDefaults = css`
  border: none;
  outline: none;
  background: transparent;
`;

export const customScrollbar = css`
  scrollbar-width: thin;
  scrollbar-color: rgba(${({ theme }) => theme.colors.secondary}, 1) transparent;
  scrollbar-track-color: transparent;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(${({ theme }) => theme.colors.secondary});
    border-radius: 2rem;
    border: transparent;
  }
`;

export const ratingColor = css`
  .positive {
    color: rgb(${({ theme }) => theme.colors.ratingPositive});
  }

  .neutral {
    color: rgb(${({ theme }) => theme.colors.ratingNeutral});
  }

  .negative {
    color: rgb(${({ theme }) => theme.colors.ratingNegative});
  }
`;
