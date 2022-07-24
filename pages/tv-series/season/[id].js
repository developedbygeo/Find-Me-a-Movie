import Image from 'next/image';
import { getShowDetails } from '@/utils/api-utils';

import { getImage } from '@/utils/data-utils';

import data from '@/mock/tv-series-season-details.json';

import { StyledSeasonDetails } from '@/styles/season-details.styled';
import Description from '@/components/Details/Description';
import Stats from '@/components/ShowSpecific/Stats';
import BingeCalculator from '@/components/ShowSpecific/BingeCalculator';

const SeasonDetails = ({ details }) => {
  const image = getImage(details.poster_path);

  return (
    <StyledSeasonDetails className="season-details">
      <div className="img-cont season-details-img-cont">
        <Image src={image} alt={details.name} layout="fill" objectFit="cover" priority />
      </div>
      <Description
        title={details.name}
        overview={details.overview}
        isSeasonDetails
        className="season-details-desc"
      />
      <Stats episodes={details.episodes} />
      <BingeCalculator episodes={details.episodes} className="season-details-binge" />
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

SeasonDetails.backButton = true;

export default SeasonDetails;
