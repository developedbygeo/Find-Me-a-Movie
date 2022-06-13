import Image from 'next/image';
import NavLink from '../UI/NavLink';

import { StyledTrending, MovieContainer } from './TrendingItem.styled';

import { getParsedMovie, getAmbiguousProperty } from '@/utils/data-utils';

const TrendingItem = ({ movie, priority, ...props }) => {
  const {
    poster_path,
    genre_ids,
    media_type,
    first_air_date,
    release_date,
    name,
    original_name,
    original_title,
  } = movie;

  const date = getAmbiguousProperty(first_air_date, release_date);
  const title = getAmbiguousProperty(name, original_name, original_title);

  const parsedData = getParsedMovie(poster_path, genre_ids[0], media_type, date, title);

  return (
    <StyledTrending {...props}>
      {/* <NavLink href={`/details/${parsedData.slug}`} passHref> */}
      <NavLink href={`/details/${parsedData.slug}`}>
        <a>
          <div>
            <Image
              priority={priority}
              placeholder="blur"
              blurDataURL={parsedData.image}
              src={parsedData.image}
              title={title}
              alt={title}
              draggable="false"
              layout="fill"
            />
          </div>
        </a>
      </NavLink>
    </StyledTrending>
  );
};

export default TrendingItem;
