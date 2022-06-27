import Image from 'next/image';
import { getShowDetails } from '@/utils/api-utils';

import { getImage, getDetailAverage, getDetailClassname } from '@/utils/data-utils';

import data from '@/mock/tv-series-season-details.json';

import Description from '@/components/Details/Description';
import { StyledSeasonDetails, StyledStats } from '@/styles/season-details.styled';

const SeasonDetails = ({ details }) => {
  const image = getImage(details.poster_path);
  const avgDuration = getDetailAverage(details.episodes, 'runtime');
  const avgRating = getDetailAverage(details.episodes, 'vote_average');
  const ratingClassname = getDetailClassname(avgRating);

  // TODO add binge calculator + helper

  return (
    <StyledSeasonDetails>
      <div className="img-cont">
        <Image src={image} alt={details.name} layout="fill" objectFit="cover" />
      </div>
      <Description title={details.name} overview={details.overview} isSeasonDetails />
      <StyledStats>
        <h2>Season Stats</h2>
        <div className="rating">
          <p>
            Average Rating: <span className={ratingClassname}>{avgRating.toFixed(2)}</span> / 10
          </p>
        </div>
        <div className="runtime">
          <p>
            Average Duration: <span className="time">{avgDuration}</span> minutes
          </p>
        </div>
      </StyledStats>
    </StyledSeasonDetails>
  );
};

export async function getServerSideProps(ctx) {
  // const { show, id } = ctx.query;
  // const data = await getShowDetails(show, id);

  return {
    props: {
      details: data,
    },
  };
}

export default SeasonDetails;
