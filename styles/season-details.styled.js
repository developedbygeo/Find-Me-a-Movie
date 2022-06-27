import styled from 'styled-components';

import { StyledPage } from './content.styled';
import { flexMixin, ratingColor } from '@/shared/mixins';

export const StyledSeasonDetails = styled(StyledPage)`
  padding-block: 5%;
  .img-cont {
    position: relative;
    height: 50vh;
    width: 60vw;
    margin-inline: auto;
  }
`;

export const StyledStats = styled.article`
  width: 90%;
  margin-inline: auto;
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 2rem;
  ${ratingColor};

  p {
    font-family: 'Montserrat', sans-serif;
    color: rgba(${({ theme }) => theme.colors.white}, 0.8);
  }

  .time {
    color: rgba(${({ theme }) => theme.colors.white}, 1);
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
  }
`;
