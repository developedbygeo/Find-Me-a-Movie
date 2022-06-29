import { getBingeDuration } from '@/utils/season-data-utils';
import { StyledBinge, HeaderCont, CalculatorCont } from './BingeCalculator.styled';

import { FcIdea } from 'react-icons/fc';
import { BsClockHistory, BsCalendar2Day } from 'react-icons/bs';
import { CgSandClock } from 'react-icons/cg';

const BingeCalculator = ({ episodes }) => {
  const [minutes, hours, days] = getBingeDuration(episodes, 'runtime');

  return (
    <StyledBinge>
      <HeaderCont>
        <FcIdea />
        <h2>Feeling adventurous?</h2>
      </HeaderCont>
      <p>According to our calculations, to watch this season in its entirety in one-go, it would take you:</p>

      <CalculatorCont>
        <li>
          <CgSandClock />
          <p>
            <span>{minutes}</span> minutes
          </p>
        </li>
        <li>
          <BsClockHistory />
          <p>
            <span>{hours}</span> hours
          </p>
        </li>
        <li>
          <BsCalendar2Day />
          <p>
            <span>{days}</span> days
          </p>
        </li>
      </CalculatorCont>
    </StyledBinge>
  );
};

export default BingeCalculator;
