import styled from 'styled-components';
import { StyledLanding } from './landing.styled';

import { flexMixin } from '@/shared/mixins';
import { lightNeumorph } from '@/shared/neumorphic';

export const StyledPage = styled(StyledLanding)`
  grid-template-rows: 0.2fr 0.5fr;
  align-items: flex-start;

  .recommended {
    ${lightNeumorph};

    h1 {
      font-size: 2.5rem;
      font-weight: 300;
    }
  }
`;

export const StyledLoading = styled.section`
  height: 90vh;
  width: 80%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};
`;
