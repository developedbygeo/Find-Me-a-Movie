import { css } from 'styled-components';

export const headingL = css`
  font-size: ${({ theme }) => theme.typography.sizes.headingL};
  letter-spacing: 0.175rem;
  color: rgb(${({ theme }) => theme.colors.white});
  font-weight: ${({ theme }) => theme.typography.weights.light};
`;

export const headingM = css`
  font-size: ${({ theme }) => theme.typography.sizes.headingM};
  line-height: 1.5;
  letter-spacing: 0.145rem;
  color: rgb(${({ theme }) => theme.colors.white});
  font-weight: ${({ theme }) => theme.typography.weights.regular};
`;

export const headingS = css`
  font-size: ${({ theme }) => theme.typography.sizes.headingS};
  line-height: 1.5;
  letter-spacing: 0.125rem;
  color: rgb(${({ theme }) => theme.colors.text});
`;

export const body = css`
  font-size: ${({ theme }) => theme.typography.sizes.bodyM};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: rgb(${({ theme }) => theme.colors.white});
  letter-spacing: 0.15rem;
`;

export const descriptionStyle = css`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.8;
  letter-spacing: 0.175rem;
  color: rgba(${({ theme }) => theme.colors.white}, 0.85);
  font-weight: ${({ theme }) => theme.typography.weights.regular};
`;
