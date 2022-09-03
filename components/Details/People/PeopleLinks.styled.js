import styled from 'styled-components';

import { LinkWrapper } from '@/components/Details/ExternalLinks.styled';
import { flexMixin } from '@/shared/mixins';

export const StyledPeopleLinks = styled(LinkWrapper)`
  align-items: center;
  align-self: flex-end;
  justify-self: flex-end;

  svg {
    pointer-events: none;
    font-size: 2.5rem;
  }

  div {
    width: 50%;
    ${flexMixin('space-evenly', 'center', 'row')};
  }
`;

export const HomepageLink = styled.a`
  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: rgb(${({ theme }) => theme.colors.secondary});
    }
  }
`;

export const ImdbLink = styled.a`
  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: #ffc107;
    }
  }
`;
