import { css } from 'styled-components';

export const lightNeumorph = css`
  padding: 2rem;
  border-radius: 1rem;
  background: linear-gradient(45deg, #0e121b, #111520);
  box-shadow: 0.8rem -0.8rem 1.2rem #0f121c, -0.8rem 0.8rem 1.2rem #111620;
`;

export const tagNeumorph = css`
  padding: 1rem;
  border-radius: 1rem;
  background: #10141e;
  box-shadow: 2.2rem -2.2rem 5rem #0c0f16, -2.2rem 2.2rem 5rem #141926;
`;

export const buttonNeumorph = css`
  border-radius: 1rem;
  background: #10141e;
  box-shadow: 2.2rem -2.2rem 5rem #0c0f17, -2.2rem 2.2rem 5rem #141925;

  @media (hover: hover) {
    transition: all 450ms ease-in-out;
    &:hover {
      box-shadow: -2.2rem 2.2em 6rem #0c0f17, 2.2rem -2.2rem 6rem #141925;
      padding-inline: 5rem;
      letter-spacing: 0.3rem;
    }
  }
`;
