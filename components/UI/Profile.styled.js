import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';

export const ProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  ${flexMixin('center', 'center', 'column')};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  margin: auto;
  max-height: 10vh;
  ${flexMixin('center', 'center', 'column')};

  svg {
    color: rgb(${({ theme }) => theme.colors.white});
    width: 80%;
    height: 100%;
    align-self: flex-end;
  }
`;
