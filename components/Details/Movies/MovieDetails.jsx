import { StyledMDetails } from '../Details.styled';

import { formatCurrency } from '@/utils/data-utils';

const MovieDetails = ({ budget, revenue, runtime }) => {
  // TODO fit runtime in there too
  return (
    <StyledMDetails>
      <div>
        <h3>Budget</h3>
        <p>{formatCurrency(budget)}</p>
      </div>
      <div>
        <h3>Revenue</h3>
        <p>{formatCurrency(revenue)}</p>
      </div>
    </StyledMDetails>
  );
};

export default MovieDetails;
