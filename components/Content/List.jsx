import { StyledRecommended } from '@/styles/landing.styled';

import TrendingItem from './TrendingItem';
import { StyledList, StyledTitle } from './List.styled';

const List = ({ content, title, ext, titleAs, isSearch, ...props }) => {
  // platform data is only available for data fetched in Landing. For sections /// where this isn't available, this is a helper to derive the platform.
  const platformAssist = ext === '/tv-series' ? 'tv' : 'movies';

  return (
    <StyledRecommended {...props}>
      <StyledTitle as={titleAs || 'h1'}>{title}</StyledTitle>
      <StyledList searchStyling={isSearch}>
        {content.map((item, idx) => {
          const priority = idx < 4;
          return (
            <TrendingItem
              className="recommended-item"
              movie={item}
              key={item.id}
              priority={priority}
              ext={ext}
              tabIndex={0}
              platformAssist={platformAssist}
            />
          );
        })}
      </StyledList>
    </StyledRecommended>
  );
};

export default List;
