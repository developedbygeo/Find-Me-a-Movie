import Link from 'next/link';
import Image from 'next/image';

import { StyledTrending } from '@/components/Content/TrendingItem.styled';
import Details from '@/components/Content/Details';

import { getImage } from '@/utils/data-utils';

const SeasonItem = ({ details, showId, priority, ...props }) => {
  const imagePath = getImage(details['poster_path']);

  return (
    <StyledTrending {...props}>
      <Link href={`/tv-series/season/${details['season_number']}?show=${showId}`} passHref>
        <a>
          <div>
            <Image
              priority={priority}
              placeholder="blur"
              blurDataURL={imagePath}
              src={imagePath}
              title={details.name}
              alt={details.name}
              draggable="false"
              layout="fill"
            />
          </div>
        </a>
      </Link>
      <Details
        className="trending-details"
        title={`Season ${details.season_number}`}
        date={details.air_date}
        hasNoPlatform
      />
    </StyledTrending>
  );
};

export default SeasonItem;
