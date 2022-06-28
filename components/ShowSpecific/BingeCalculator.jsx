import { getBingeDuration } from '@/utils/season-data-utils';

import { FcIdea } from 'react-icons/fc';

const BingeCalculator = ({ episodes }) => {
  const [minutes, hours] = getBingeDuration(episodes, 'runtime');

  return (
    <p>
      Wanna go through the season in one day? It will take you:
      <span>{minutes} minutes</span> or <span>{hours} hours</span>
    </p>
  );
};

export default BingeCalculator;
