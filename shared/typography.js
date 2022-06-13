import { css } from 'styled-components';

export const headingL = css`
  font-size: ${({ theme }) => theme.typography.sizes.headingL};
  letter-spacing: 0.175rem;
  color: rgb(${({ theme }) => theme.colors.text});
  font-weight: ${({ theme }) => theme.typography.weights.light};
`;

export const headingM = css`
  font-size: ${({ theme }) => theme.typography.sizes.headingM};
  line-height: 1.5;
  letter-spacing: 0.145rem;
  color: rgb(${({ theme }) => theme.colors.text});
`;

export const headingS = css`
  font-size: ${({ theme }) => theme.typography.sizes.headingS};
  line-height: 1.5;
  letter-spacing: 0.125rem;
  color: rgb(${({ theme }) => theme.colors.text});
`;

export const body = css`
  font-size: ${({ theme }) => theme.typography.sizes.bodyM};
  color: rgb(${({ theme }) => theme.colors.white});
`;
