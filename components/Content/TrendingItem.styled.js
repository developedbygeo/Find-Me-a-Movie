import styled from 'styled-components';

export const StyledTrending = styled.li`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  & div {
    position: relative;
    width: 100%;
    height: 100%;
  }
  & img {
    border-radius: 2rem;
  }

  .trending-details {
    position: absolute;
    bottom: -100%;
    left: 0%;
    width: 100%;
    height: 40%;
    background: rgba(${({ theme }) => theme.colors.black}, 0.75);
    transition: bottom 400ms ease;
  }
  @media (hover: hover) {
    &:hover .trending-details {
      bottom: 0%;
    }
  }
`;

// exists just for dynamic props on the container
export const TrendingDetails = styled.article``;
