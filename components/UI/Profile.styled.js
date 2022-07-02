import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { interactHoverButton } from '@/shared/interactions';

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: auto;
  ${flexMixin('center', 'center', 'row')};

  svg {
    transition: all 150ms ease-in;
    color: rgb(${({ theme }) => theme.colors.secondary});
    height: 100%;
    width: 100%;
  }
`;
