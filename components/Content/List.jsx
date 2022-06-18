import { StyledRecommended } from '@/styles/landing.styled';

import TrendingItem from './TrendingItem';
import { StyledList } from './List.styled';

const List = ({ content, title, ext }) => {
  // platform data is only available for data fetched in Landing. For sections /// where this isn't available, this is a helper to derive the platform.
  const platformAssist = ext === '/tv-series' ? 'tv' : 'movies';

  return (
    <StyledRecommended>
      <h1>{title}</h1>
      <StyledList>
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
