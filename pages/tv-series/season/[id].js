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

  // TODO add binge calculator + helper

  return (
    <StyledSeasonDetails>
      <div className="img-cont">
        <Image src={image} alt={details.name} layout="fill" objectFit="cover" priority />
      </div>
      <Description title={details.name} overview={details.overview} isSeasonDetails />
      <Stats episodes={details.episodes} />
      <BingeCalculator episodes={details.episodes} />
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
