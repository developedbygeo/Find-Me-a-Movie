import { StyledStats } from './Stats.styled';

import { getDetailAverage } from '@/utils/season-data-utils';
import { getDetailClassname } from '@/utils/data-utils';

const Stats = ({ episodes, ...props }) => {
  const avgDuration = getDetailAverage(episodes, 'runtime');
  const avgRating = getDetailAverage(episodes, 'vote_average');
  const ratingClassname = getDetailClassname(avgRating);

  return (
    <StyledStats {...props}>
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
  );
};

export default Stats;
