import styled from 'styled-components';
import { StyledLanding } from './landing.styled';

import { flexMixin } from '@/shared/mixins';

export const StyledPage = styled(StyledLanding)``;

export const StyledLoading = styled.section`
  height: 90vh;
  width: 80%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};
`;
