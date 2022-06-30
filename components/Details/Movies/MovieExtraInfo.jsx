import { formatCurrency } from '@/utils/data-utils';

import { StyledMDetails, StyledDetails } from './MoviesExtraInfo.styled';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';

const MovieExtraInfo = ({ budget, revenue }) => {
  return (
    <StyledDetails>
      <h2>Key Details</h2>
      <StyledMDetails>
        <li>
          <GiPayMoney className="budget" />
          <div>
            <h3>Budget</h3>
            <p>{formatCurrency(budget)}</p>
          </div>
        </li>
        <li>
          <GiReceiveMoney className="revenue" />
          <div>
            <h3>Revenue</h3>
            <p>{formatCurrency(revenue)}</p>
          </div>
        </li>
      </StyledMDetails>
    </StyledDetails>
  );
};

export default MovieExtraInfo;
