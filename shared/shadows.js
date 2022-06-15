import { css } from 'styled-components';

export const boxElevationLow = css`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
export const boxElevationMid = css`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const boxElevationHigh = css`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

export const previewElevation = css`
  box-shadow: rgb(${({ theme }) => theme.colors.secondary}) 0.1rem 1.5rem 2.5rem -2rem;
`;
