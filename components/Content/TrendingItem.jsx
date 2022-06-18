import Image from 'next/image';
import NavLink from '../UI/NavLink';

import Details from './Details';
import { getParsedMovie, getAmbiguousProperty } from '@/utils/data-utils';
import { StyledTrending, TrendingDetails } from './TrendingItem.styled';

const TrendingItem = ({ movie, priority, platformAssist, ext, ...props }) => {
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

  // dedicated to landing page due to ext being unavailable
  const customLandingExt = parsedData.platform === 'TV' ? '/tv-series' : '/movies';

  // if not landing, ext is passed through props
  const urlExtension = ext ? ext : customLandingExt;

  return (
    <StyledTrending {...props}>
      <NavLink href={`${urlExtension}/${movie.id}`} passHref>
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
      <TrendingDetails>
        <Details
          className="trending-details"
          title={title}
          date={date}
          platform={parsedData.platform ? parsedData.platform : platformAssist}
        />
      </TrendingDetails>
    </StyledTrending>
  );
};

export default TrendingItem;
