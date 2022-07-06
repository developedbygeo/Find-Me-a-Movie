import { RiFilmFill, RiTvFill } from 'react-icons/ri';

import { StyledDetails } from './Details.styled';

const Details = ({ title, date, platform, ...props }) => {
  const icon = platform === 'tv' ? <RiTvFill /> : <RiFilmFill />;
  return (
    <StyledDetails {...props}>
      <div className="details">
        <p>
          <span className="date">{date || 'No date'} </span>
          <span>&bull; </span>
          <span className={`icon ${platform === 'tv' ? 'tv' : 'movie'}`}>
            {icon} {platform}
          </span>
        </p>
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
    </StyledDetails>
  );
};

export default Details;
