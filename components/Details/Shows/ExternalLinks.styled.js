import styled from 'styled-components';

import { flexMixin } from '@/shared/mixins';
import { lightNeumorph, tagNeumorph } from '@/shared/neumorphic';

export const LinkWrapper = styled.article`
  width: 90%;
  margin-inline: auto;
  ${flexMixin('center', 'flex-start', 'column')}
  gap: 2rem;
  ${lightNeumorph};

  h3 {
    position: relative;
    font-weight: 400;
    z-index: 15;
  }
`;

export const StyledLinks = styled.div`
  ${flexMixin('flex-start', 'center', 'row')};
  gap: 2rem;
  a {
    ${tagNeumorph};
    display: flex;
    transition: all 100ms ease-in;
    padding: 1.25rem;
  }

  svg {
    width: auto;
    height: 4rem;
    pointer-events: none;
  }

  a.instagram {
    border-radius: 2rem;
  }

  @media (hover: hover) {
    a:hover,
    a:active {
      &.fb {
        color: #1877f2;
      }
      &.twitter {
        color: #1da1f2;
      }
      &.instagram {
        background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),
          radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
          radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
          radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),
          radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
          radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%),
          radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
          linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
        background-clip: content-box;
      }
      &.imdb {
        color: #ffc107;
      }
    }
  }
`;
