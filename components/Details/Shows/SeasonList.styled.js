import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { lightNeumorph } from '@/shared/neumorphic';

export const ListWrapper = styled.article`
  height: 100%;
  width: 90%;
  margin-inline: auto;
  overflow-x: hidden;
  padding-block: 1.5rem;
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 2rem;
  ${lightNeumorph};

  h3 {
    font-weight: 300;
  }
`;
