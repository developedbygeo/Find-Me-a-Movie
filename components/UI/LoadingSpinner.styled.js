import styled from 'styled-components';

import { loadingFolding } from '@/shared/animation';
import { gridMixin } from '@/shared/mixins';

export const StyledParent = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
  transform: rotate(45deg);
  ${gridMixin('repeat(2, 1fr)', 'repeat(2, 1fr)')};
  gap: 0.3rem;

  & > div {
    position: relative;
    width: 70%;
    height: 70%;
    transform: scale(1.1);
  }

  & > div::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25%;
    background: rgb(${({ theme }) => theme.colors.white});
    animation: ${loadingFolding} 3s infinite linear both;
    transform-origin: 100% 100%;
  }

  & > .child-1::before {
    background: rgb(${({ theme }) => theme.colors.accent});
  }

  & > .child-2::before {
    background: rgb(${({ theme }) => theme.colors.secondary});
  }

  & > .child-3::before {
    background: rgb(${({ theme }) => theme.colors.accent});
  }

  & > .child-4::before {
    background: rgb(${({ theme }) => theme.colors.secondary});
  }

  & > .child-2 {
    transform: scale(1.1) rotateZ(180deg);
  }

  & > .child-3 {
    transform: scale(1.1) rotateZ(180deg);
  }

  & > .child-4 {
    transform: scale(1.1) rotateZ(270deg);
  }

  & > .child-2::before {
    animation-delay: 0.3s;
  }

  & > .child-3::before {
    animation-delay: 0.6s;
  }

  & > .child-4::before {
    animation-delay: 0.9s;
  }
`;
