import Link from 'next/link';
import Image from 'next/image';

import { StyledTrending } from '@/components/Content/TrendingItem.styled';

import { getImage } from '@/utils/data-utils';

const SeasonItem = ({ details, priority, ...props }) => {
  const imagePath = getImage(details['poster_path']);

  return (
    <StyledTrending {...props}>
      <Link href={`/tv-series/season/${details.id}`} passHref>
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
    </StyledTrending>
  );
};

export default SeasonItem;
