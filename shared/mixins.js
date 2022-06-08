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
  scrollbar-color: rgba(${({ theme }) => theme.colors.primary}, 1) transparent;
  scrollbar-track-color: transparent;

  ::-webkit-scrollbar {
    width: 7.5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(${({ theme }) => theme.colors.primary});
    border-radius: 20px;
    border: transparent;
  }
`;
